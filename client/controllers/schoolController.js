const db = require('../config/db');

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ message: 'Invalid input data' });
  }

  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
  });
};

exports.listSchools = (req, res) => {
  try {
    const userLat = parseFloat(req.query.latitude);
    const userLong = parseFloat(req.query.longitude);
    console.log(`Received coordinates: Latitude = ${userLat}, Longitude = ${userLong}`);

    if (isNaN(userLat) || isNaN(userLong)) {
      return res.status(400).json({ message: 'Invalid coordinates' });
    }

    const sql = 'SELECT * FROM schools';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Database query failed:', err);
        return res.status(500).json({ error: err.message });
      }

      const withDistance = results.map(school => {
        const distance = Math.sqrt(
          Math.pow(school.latitude - userLat, 2) + Math.pow(school.longitude - userLong, 2)
        );
        return { ...school, distance: distance.toFixed(2) };
      });

      withDistance.sort((a, b) => a.distance - b.distance);
      return res.status(200).json(withDistance);
    });
  } catch (error) {
    console.error('Unhandled error in listSchools:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

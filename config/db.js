const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dashboard_uas'
});

db.connect(err => {
  if (err) {
    console.error('Gagal koneksi DB:', err);
    return;
  }
  console.log('MySQL Connected');
});

module.exports = db;

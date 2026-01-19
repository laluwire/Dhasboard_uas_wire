const express = require('express');
const app = express();
const db = require('./config/db');
const apiRoutes = require('./routes/api');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

// pakai API
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

// KONEK DB HANYA SAAT LOKAL
if (!process.env.RAILWAY_ENVIRONMENT) {
  db.connect((err) => {
    if (err) {
      console.log('Gagal koneksi DB:', err);
    } else {
      console.log('DB terkoneksi');
    }
  });
}

// PORT WAJIB UNTUK HOSTING
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

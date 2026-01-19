const express = require('express');
const app = express();
const db = require('./config/db');
const apiRoutes = require('./routes/api');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// pakai API
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});

if (process.env.RAILWAY_ENVIRONMENT === undefined) {
  db.connect((err) => {
    if (err) {
      console.log('Gagal koneksi DB:', err);
    } else {
      console.log('DB terkoneksi');
    }
  });
}

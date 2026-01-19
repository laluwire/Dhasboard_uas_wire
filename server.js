const PORT = process.env.PORT || 3000;

if (!process.env.RAILWAY_ENVIRONMENT) {
  db.connect((err) => {
    if (err) {
      console.log('Gagal koneksi DB:', err);
    } else {
      console.log('DB terkoneksi');
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

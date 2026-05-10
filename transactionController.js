const db = require("../config/db");

exports.showTransaction = (req, res) => {
  const sql = `
    SELECT transaksi.id,
           transaksi.nama_pembeli,
           produk.barang,
           transaksi.jumlah
    FROM transaksi
    JOIN produk
    ON transaksi.produk_id = produk.id
  `;

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.json(result);
  });
};

exports.addTransaction = (req, res) => {
  const { nama_pembeli, produk_id, jumlah } = req.body;

  const sql =
    "INSERT INTO transaksi (nama_pembeli, produk_id, jumlah) VALUES (?, ?, ?)";

  db.query(sql, [nama_pembeli, produk_id, jumlah], (err, result) => {
    if (err) throw err;

    res.json({
      message: "Transaksi berhasil ditambahkan",
    });
  });
};

const db = require("../config/db");

exports.showProducts = (req, res) => {
  const sql = `
    SELECT produk.id,
           produk.barang,
           produk.harga,
           kategori.nama_kategori
    FROM produk
    JOIN kategori
    ON produk.kategori_id = kategori.id
  `;

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.json(result);
  });
};

exports.addProduct = (req, res) => {
  const { barang, harga, kategori_id } = req.body;

  const sql =
    "INSERT INTO produk (barang, harga, kategori_id) VALUES (?, ?, ?)";

  db.query(sql, [barang, harga, kategori_id], (err, result) => {
    if (err) throw err;

    res.json({
      message: "Produk berhasil ditambahkan",
    });
  });
};

exports.changeProduct = (req, res) => {
  const { barang, harga, kategori_id } = req.body;

  const sql = "UPDATE produk SET barang=?, harga=?, kategori_id=? WHERE id=?";

  db.query(sql, [barang, harga, kategori_id, req.params.id], (err, result) => {
    if (err) throw err;

    res.json({
      message: "Produk berhasil diupdate",
    });
  });
};

exports.deleteProduct = (req, res) => {
  const sql = "DELETE FROM produk WHERE id=?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;

    res.json({
      message: "Produk berhasil dihapus",
    });
  });
};

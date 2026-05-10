const db = require("../config/db");

exports.showCategory = (req, res) => {
  const sql = "SELECT * FROM kategori";

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.json(result);
  });
};

exports.addCategory = (req, res) => {
  const { nama_kategori } = req.body;

  const sql = "INSERT INTO kategori (nama_kategori) VALUES (?)";

  db.query(sql, [nama_kategori], (err, result) => {
    if (err) throw err;

    res.json({
      message: "Kategori berhasil ditambahkan",
    });
  });
};

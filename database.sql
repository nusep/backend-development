CREATE DATABASE technova;

USE technova;

CREATE TABLE kategori (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_kategori VARCHAR(100)
);

CREATE TABLE produk (
    id INT AUTO_INCREMENT PRIMARY KEY,
    barang VARCHAR(100),
    harga INT,
    kategori_id INT,
    FOREIGN KEY (kategori_id)
    REFERENCES kategori(id)
);

CREATE TABLE transaksi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_pembeli VARCHAR(100),
    produk_id INT,
    jumlah INT,
    FOREIGN KEY (produk_id)
    REFERENCES produk(id)
);

INSERT INTO kategori (nama_kategori)
VALUES
('Laptop'),
('Smartphone');

INSERT INTO produk (barang, harga, kategori_id)
VALUES
('Asus ROG', 15000000, 1),
('Macbook Air', 18000000, 1),
('iPhone 15', 16000000, 2),
('Samsung S24', 14000000, 2);

INSERT INTO transaksi (nama_pembeli, produk_id, jumlah)
VALUES
('Budi', 1, 1),
('Andi', 3, 2);
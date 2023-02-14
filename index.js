const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const { db } = require('./config/dbconnect.js');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('mysql');

const db = mysql.createConnection({
  host: '103.150.121.177',
  user: 'root',
  password: 'YUIidhb667',
  // username: 'imad',
  // userpassword: 'TxjT0txl1C5u',
  database: 'penjualan'
});

db.connect(function(err) {
 if (err) throw err;
 console.log("Connected!");
});

// read
app.get('/read', (req, res) => {
  const sqlQuery = "SELECT * FROM barang";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get('/read/:id_barang', (req, res) => {
  const id_barang = req.params.id_barang;

  const sqlQuery = "SELECT * FROM barang WHERE id_barang = ?";
  db.query(sqlQuery, id_barang, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

// create
app.post('/create', (req, res) => {
  const id_barang = req.body.id_barang;
  const nama_barang = req.body.nama_barang;
  const harga = req.body.harga;
  const stok = req.body.stok;
  const id_supplier = req.body.id_supplier;

  const sqlQuery = "INSERT INTO barang (id_barang, nama_barang, harga, stok, id_supplier) VALUE (?, ?, ?, ?, ?)";
  db.query(sqlQuery, [id_barang, nama_barang, harga, stok, id_supplier], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

// update
app.put('/update', (req, res) => {
  const id_barang = req.body.id_barang;
  const nama_barang = req.body.nama_barang;
  const harga = req.body.harga;
  const stok = req.body.stok;
  const id_supplier = req.body.id_supplier;

  const sqlQuery = "UPDATE barang SET nama_barang = ?, harga = ?, stok = ?, id_supplier = ? WHERE id_barang = ?";
  db.query(sqlQuery, [nama_barang, harga, stok, id_supplier, id_barang], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

// delete
app.delete('/delete', (req, res) => {
  const id_barang = req.body.id_barang;

  const sqlQuery = "DELETE FROM barang WHERE id_barang = ?";
  db.query(sqlQuery, id_barang, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

app.listen(3002, () => {
  console.log('running port 3002');
});

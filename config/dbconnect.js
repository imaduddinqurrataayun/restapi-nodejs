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

exports.db = db;
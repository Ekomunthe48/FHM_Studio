var mysql = require('mysql');

//database
const conn = mysql.createConnection({
    host:'localhost',
    user : 'root',
    password:'',
    database:'dbgallery'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi')
});

module.exports = conn;
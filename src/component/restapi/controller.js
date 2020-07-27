'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan",res)
};

//menampilkan data
exports.tampilGallery = function(req,res){
    connection.query("SELECT * FROM gambar", function(error, rows, fileds)
    {
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

// exports.tampilGambar = function(req,res){
//     let id = req.params.id;
//     connection.query("SELECT gambar FROM gambar WHERE id_gambar = ?", [id],
//     function(error, rows, fileds){
//         if(error){
//             console.log(error);
//         }else{
//             response.ok(rows, res)
//         }
//     });
// }

//menampilkan data berdasarkan id
exports.tampilberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM gambar WHERE id_gambar = ?', [id],
    function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res)
        }
    });

};

//menambahkan data
exports.tambahGambar = function(req,res){
    var judul =req.body.judul;
    var Tanggal = req.body.Tanggal;
    var gambar = req.body.gambar;

    connection.query('INSERT INTO gambar (judul,Tanggal,gambar) VALUES(?,?,?)', [judul,Tanggal,gambar],
    
    function (error, rows,fileds){
        if(error){
        console.log(error);
        }else {
            response.ok("Berhasil menambahkan gambar",res)
        }
    }
    );
};

// mengubah data berdasarkan id
exports.ubahGambar = function(req,res){
    var id = req.body.id_gambar;
    var judul =req.body.judul;
    var Tanggal = req.body.Tanggal;
    var gambar = req.body.gambar;
    
    connection.query('UPDATE gambar SET judul=?, Tanggal=?, gambar=? WHERE id_gambar=?', [judul,Tanggal,gambar,id],
    function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Ubah Data", res)
        }
    });

};

// menghapus data berdasarkan id
exports.hapusData = function(req,res){
    var id = req.body.id_gambar;

    connection.query('DELETE FROM gambar WHERE id_gambar=?',[id],
    function(error, rows, fileds){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Menghapus Data", res)
        }
    });

};

//menampilkan matakuliah group

// exports.tampilGroupmatakuliah = function (req,res){
//     connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakulia.id_matakuliah, matakulia.matakuliah, matakulia.sks FROM krs JOIN matakulia JOIN mahasiswa WHERE krs.id_matakuliah = matakulia.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
//         function(error, rows, fileds){
//            if(error){
//                console.log(error);
//            } else{
//                response.oknested(rows, res);
//            }
//         }
//     )
// }

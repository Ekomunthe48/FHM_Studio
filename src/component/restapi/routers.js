'use strict';

module.exports = function(app){
    var jsonku = require('./controller')

    app.route('/')
    .get(jsonku.index);

    app.route('/tampil')
    .get(jsonku.tampilGallery);

    // app.route('/gambar')
    // .get(jsonku.tampilGambar);

    app.route('/tampil/:id')
     .get(jsonku.tampilberdasarkanid);

     app.route('/tambah')
     .post(jsonku.tambahGambar);

     app.route('/ubah')
     .put(jsonku.ubahGambar);

     app.route('/hapus')
     .delete(jsonku.hapusData);

    //  app.route('/tampilmatakuliah')
    //  .get(jsonku.tampilGroupmatakuliah);
}
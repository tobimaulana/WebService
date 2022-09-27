var express = require('express');
var router = express.Router();
var cekToken = require("../middleware"); 

// Panggil Model Mahasiswa
var Mahasiswa = require('../models/Mahasiswa.js');


/* TAMPIL DATA */
router.get('/', cekToken, function(req, res, next) {
       Mahasiswa.findAll().then( data => {
              res.json({
                     status:true,
                     pesan:"Berhasil Tampil", 
                     data:data
              });
       }).catch(err => {
              res.json({
                     status:false,
                     pesan:"Gagal Tampil : " + err.message,
                     data:[]
              });
       });
});



/* TAMBAH DATA */
router.post('/', cekToken, function(req, res, next) {
       Mahasiswa.create(req.body).then (data => {
              res.json({
                     status:true,
                     pesan:"Berhasil Tambah",
                     data:data
              });
       })
       .catch(err => {
              res.json({
                     status:false,
                     pesan:"Gagal Tambah : " + err.message,
                     data:[]
              });
       });
});



/* UBAH DATA */
router.put('/', cekToken, function(req, res, next) {
       Mahasiswa.update(req.body, {
              where:{nim:req.body.nim}
       }).then( () => {
              res.json({
                     status:true,
                     pesan:"Berhasil Ubah",
                     data: []
              });
       })
       .catch(err => {
              res.json({
                     status:false,
                     pesan:"Gagal Ubah: " + err.message,
                     data:[]
              });
       });
});


/* HAPUS DATA */
router.delete('/', cekToken, function(req, res, next) {
       Mahasiswa.destroy({
              where:{nim:req.body.nim}
       }).then ( () => {
              res.json({
                     status:true,
                     pesan:"Berhasil Hapus",
                     data: []
              });
       })
       .catch(err => {
              res.json({
                  status:false,
                  pesan:"Gagal Hapus: " + err.message,
                  data:[]
              });
       });
});

module.exports = router;
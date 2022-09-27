const Sequelize = require('sequelize');

const koneksi = new Sequelize('fikomdb', 'root', '', {
       host: 'localhost',
       port: '3306',
       dialect: 'mariadb',
       dialectOptions:{
              useUTC:false,
              timezone: "Etc/GMT+7"
       }
});

koneksi.authenticate().then( () => {
       console.log('Berhasil Konek');
}).catch(err => {
       console.error('Gagal Konek : ', err.message);
});

module.exports=koneksi;
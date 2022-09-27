var koneksi = require('../koneksi');
const Sequelize = require('sequelize');

const Mahasiswa = koneksi.define('mahasiswa', {
       nim: {
              type: Sequelize.STRING,
              allowNull:false,
              primaryKey:true
       },
       nama: {
              type: Sequelize.STRING,
              allowNull:false
       },
       alamat: {
              type: Sequelize.STRING,
              allowNull:false
       },
},
{
       timestamps:true,
       freezeTableName: true
}
);

module.exports=Mahasiswa;
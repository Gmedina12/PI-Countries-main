const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/**MODELO 1 | Country

ID (Código de tres letras). *
Nombre. *
Imagen de la bandera. *
Continente. *
Capital. *
Subregión.
Área.
Población. * */

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey:true,
      allowNull: false,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.STRING
    },
    poblacion:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};



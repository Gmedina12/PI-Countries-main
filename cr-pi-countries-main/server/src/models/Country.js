const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

/** Definir MODELO Country
ID (Código de tres letras). *(obligatorio)
Nombre. *(obligatorio)
Imagen de la bandera. *(obligatorio)
Continente. *(obligatorio)
Capital. *(obligatorio)
Subregión.
Área.
Población. * (obligatorio)
*/

module.exports = (sequelize) => {
  sequelize.define('Country', {
    ID: {
      type: DataTypes.STRING(3),
      primaryKey:true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continents: {
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
    population:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};



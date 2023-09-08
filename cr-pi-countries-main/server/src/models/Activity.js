const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/** 
 * MODELO 2 | Activity

ID. * (obligatorio)
Nombre. * (obligatorio)
Dificultad (número del 1 al 5). * (obligatorio)
Duración (en horas).
Temporada (Verano, Otoño, Invierno o Primavera). *(obligatorio)
*/
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type:DataTypes.TEXT
        },
        difficulty: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.SMALLINT,
        },
        season: {
            type: DataTypes.ENUM('Verano','Primavera', 'Invierno', 'Otoño'),
            allowNull: false
        }
    });
};

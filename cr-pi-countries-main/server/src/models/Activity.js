const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/** 
 * MODELO 2 | Activity

ID. *
Nombre. *
Dificultad (número del 1 al 5). *
Duración (en horas).
Temporada (Verano, Otoño, Invierno o Primavera). *
*/
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dificultad: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        duracion: {
            type: DataTypes.SMALLINT,
        },
        temporada: {
            type: DataTypes.ENUM('Verano','Primavera', 'Invierno', 'Otoño'),
            allowNull: false
        }
    });
};

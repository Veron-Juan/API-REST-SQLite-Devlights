const { DataTypes } = require('sequelize');
const db = require('./index');


const rolesModel = db.define("roles", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
    
})

module.exports = rolesModel
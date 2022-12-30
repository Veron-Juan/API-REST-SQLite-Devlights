const { DataTypes } = require('sequelize');
const db = require('./index');


const tasksModel = db.define("tasks", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
    
})

module.exports = tasksModel
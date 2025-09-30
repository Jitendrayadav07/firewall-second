// config/db.config.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

//Localhost Databse Connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      port: 3306,
    }
);
  

  // Test the database connection
sequelize
.authenticate()
.then(() => {
  console.log("Database connection has been established successfully.");
})
.catch((err) => {
  console.error("Unable to connect to the database:", err);
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//All Model File Import 
db.cities = require("../models/city")(sequelize, Sequelize);

module.exports = db;
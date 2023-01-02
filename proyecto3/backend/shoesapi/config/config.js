const dotenv = require("dotenv").config;

module.exports = {
	NODE_ENV: process.env.NODE_ENV || "development",
	USERNAME: process.env.USERNAME || "root",
	PASSWORD: process.env.PASSWORD || "root",
	DATABASE: process.env.DATABASE || "shoessalesapp",
	dialect: process.env.DIALECT || "mysql",
	HOST: process.env.HOST || "127.0.0.1",
	PORT: process.env.PORT || 3000,
};

// {
//   "development": {
//     "username": "root",
//     "password": "root",
//     "database": "shoessalesapp",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }

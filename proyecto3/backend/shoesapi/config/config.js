const path = require("path")

require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

module.exports = {
	NODE_ENV: process.env.NODE_ENV || "development",
	USERNAME: process.env.USERNAME || "root",
	PASSWORD: process.env.PASSWORD || "root",
	DATABASE: process.env.DATABASE || "shoessalesapp",
	dialect: process.env.DIALECT || "mysql",
	HOST: process.env.HOST || "127.0.0.1",
	PORT: process.env.PORT || 3000,
}

// module.exports = {
// 	development: {
// 		username: process.env.USERNAME, // ← Usuario de la DB
// 		password: process.env.PASSWORD, // ← Contraseña del usuario de la DB
// 		database: process.env.DATABASE, // ← Nombre de la DB previamente creada
// 		host: process.env.HOST,
// 		dialect: process.env.DIALECT,
// 	},
// 	test: {
// 		username: "root",
// 		password: null,
// 		database: "database_test",
// 		host: "127.0.0.1",
// 		dialect: "mysql",
// 	},
// 	production: {
// 		username: process.env.USERNAME, // ← Usuario de la DB
// 		password: process.env.PASSWORD, // ← Contraseña del usuario de la DB
// 		database: process.env.DATABASE, // ← Nombre de la DB previamente creada
// 		host: process.env.HOST,
// 		dialect: process.env.DIALECT,
// 	},
// }
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

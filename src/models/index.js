"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import configDB from "./../database/config/database";
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = configDB[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

sequelize
	.authenticate()
	.then(() => console.log("DB connection has been established successfully."))
	.then(() => {
		sequelize.sync({ force: false });
	})
	.catch((err) => console.error("Unable to connect to the database:", err));

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file));
		// Assuming the module exports a function directly
		db[model.name] = model(sequelize, Sequelize.DataTypes);
		// If the module exports an object with the model function nested inside
		//db[model.name] = model.default(sequelize, Sequelize.DataTypes);
	});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

console.log("db", db.sequelize.models);

module.exports = db;

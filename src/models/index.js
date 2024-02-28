// models/index.js
const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const configDB = require("./../database/config/database");

const env = process.env.NODE_ENV || "development";
const config = configDB[env];

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);

const models = {};

// Load models dynamically
fs.readdirSync(__dirname)
	.filter((file) => file !== "index.js" && file.endsWith(".js"))
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(sequelize, DataTypes);
		models[model.name] = model;
	});

// Establish associations
Object.keys(models).forEach((modelName) => {
	if (models[modelName].associate) {
		models[modelName].associate(models);
	}
});

let db = {
	sequelize,
	...models,
};

sequelize
	.authenticate()
	.then(() => console.log("DB connection has been established successfully."))
	.then(() => {
		sequelize.sync({ force: false });
	})
	.catch((err) => console.error("Unable to connect to the database:", err));

console.log("db", db);

module.exports = db;

//export default db;

import { v4 as uuidv4 } from "uuid";
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypeZ) => {
	const MarketZone = sequelize.define(
		"MarketZone",
		{
			zone_uuid: {
				type: DataTypes.UUID,
				defaultValue: uuidv4(),

				primaryKey: true,
				allowNull: false,
			},

			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			tableName: "MarketZone",
		}
	);
	return MarketZone;
};

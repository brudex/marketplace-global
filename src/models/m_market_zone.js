// MarketZones.js
import { v4 as uuidv4 } from "uuid";

module.exports = (sequelize, DataTypes) => {
	const MarketZones = sequelize.define(
		"MarketZones",
		{
			uuid: DataTypes.STRING,
			zoneUuid: DataTypes.STRING,
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			tableName: "MarketZones",
		}
	);

	return MarketZones;
};

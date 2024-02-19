import { v4 as uuidv4 } from "uuid";
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	const MarketZones = sequelize.define(
		"MarketZones",
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: () => uuidv4(),
				primaryKey: false,
				allowNull: false,
			},

			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			tableName: "MarketZones",
		}
	);

	MarketZones.beforeCreate((marketZone, _) => {
		marketZone.zone_uuid = uuidv4();
		marketZone.uuid = uuidv4();
	});

	MarketZones.associate = (models) => {
		MarketZones.hasMany(models.MerchantShop, {
			foreignKey: "zoneUuid",
			onDelete: "CASCADE",
		});
	};
	return MarketZones;
};

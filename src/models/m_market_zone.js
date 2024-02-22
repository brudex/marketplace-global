// MarketZones.js
import { v4 as uuidv4 } from "uuid";

module.exports = (sequelize, DataTypes) => {
	const MarketZones = sequelize.define(
		"MarketZones",
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: () => uuidv4(),
				primaryKey: true,
				allowNull: false,
			},
			zoneUuid: {
				type: DataTypes.UUID,
				defaultValue: () => uuidv4(),
				unique: true, // Define zoneUuid as a unique key
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
		//marketZone.uuid = uuidv4(); // Generate UUID for uuid
		// Do not generate UUID for zoneUuid here as it's generated automatically by Sequelize
	});

	MarketZones.associate = (models) => {
		MarketZones.hasMany(models.MerchantShop, {
			foreignKey: "zoneUuid",
			onDelete: "CASCADE",
		});
	};

	return MarketZones;
};

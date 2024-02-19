import { v4 as uuidv4 } from "uuid";
module.exports = (sequelize, DataTypes) => {
	const ProductCategory = sequelize.define(
		"ProductCategory",
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: () => uuidv4(),
				primaryKey: true,

				allowNull: false,
			},
			zoneUuid: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "ProductCategory",
		}
	);

	ProductCategory.associate = (models) => {
		ProductCategory.hasMany(models.Product, { foreignKey: "categoryUuid" });
		ProductCategory.belongsTo(models.MarketZones, { foreignKey: "zoneUuid" });
	};
	return ProductCategory;
};

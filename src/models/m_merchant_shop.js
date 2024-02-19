import { v4 as uuidv4 } from "uuid";
module.exports = (sequelize, DataTypes) => {
	const MerchantShop = sequelize.define(
		"MerchantShop",
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: () => uuidv4(),
				primaryKey: false,
				allowNull: false,
			},
			merchantUuid: DataTypes.STRING,
			shopName: DataTypes.STRING,
			description: DataTypes.STRING,
			zoneUuid: DataTypes.STRING,
			//shopCategoryUuid: DataTypes.STRING,
		},
		{
			tableName: "MerchantShop",
		}
	);

	MerchantShop.associate = (models) => {
		MerchantShop.belongsTo(models.Merchant, {
			foreignKey: "merchantUuid",
			onDelete: "CASCADE",
		});
		MerchantShop.belongsTo(models.MarketZones, {
			foreignKey: "zoneUuid",
			onDelete: "CASCADE",
		});
		// MerchantShop.belongsTo(models.MerchantShopCategory, {
		// 	foreignKey: "shopCategoryUuid",
		// 	onDelete: "CASCADE",
		// });
	};

	return MerchantShop;
};

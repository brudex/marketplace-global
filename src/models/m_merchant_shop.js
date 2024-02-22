import { v4 as uuidv4 } from "uuid";
module.exports = (sequelize, DataTypes) => {
	const MerchantShop = sequelize.define(
		"MerchantShop",
		{
			uuid: {
				type: DataTypes.UUID,
			},
			shopName: DataTypes.STRING,
			description: DataTypes.STRING,
			zoneUuid: DataTypes.UUID,
			merchantUuid: DataTypes.UUID,
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

	MerchantShop.associate = (models) => {
		MerchantShop.belongsTo(models.MarketZones, {
			foreignKey: "uuid",
			targetKey: "uuid",
			onDelete: "CASCADE",
		});
	};

	return MerchantShop;
};

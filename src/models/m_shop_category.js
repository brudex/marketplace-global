import { v4 as uuidv4 } from "uuid";
module.exports = (sequelize, DataTypes) => {
	const MerchantShopCategory = sequelize.define(
		"MerchantShopCategory",
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: () => uuidv4(),
				primaryKey: false,
				allowNull: false,
			},
			merchantShopUuid: DataTypes.STRING,
			zoneUuid: DataTypes.STRING,
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			icon: DataTypes.STRING,
		},
		{
			tableName: "MerchantShopCategory",
		}
	);

	MerchantShopCategory.associate = (models) => {
		MerchantShopCategory.hasMany(models.MerchantShop, {
			foreignKey: "shopCategoryUuid",
			onDelete: "CASCADE",
		});
	};
	return MerchantShopCategory;
};

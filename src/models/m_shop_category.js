module.exports = (sequelize, DataTypes) => {
	const MerchantShopCategory = sequelize.define(
		"MerchantShopCategory",
		{
			uuid: {
				type: DataTypes.STRING,
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

	return MerchantShopCategory;
};

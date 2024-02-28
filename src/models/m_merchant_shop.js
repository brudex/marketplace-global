module.exports = (sequelize, DataTypes) => {
	const MerchantShop = sequelize.define(
		"MerchantShop",
		{
			uuid: {
				type: DataTypes.STRING,

				primaryKey: true,
				allowNull: false,
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

	return MerchantShop;
};

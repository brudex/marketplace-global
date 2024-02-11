module.exports = (sequelize, DataTypes) => {
	const ProductCategory = sequelize.define(
		"ProductCategory",
		{
			uuid: DataTypes.STRING,
			zoneUuid: DataTypes.STRING,
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "ProductCategory",
		}
	);
	return ProductCategory;
};

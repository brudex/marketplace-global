module.exports = (sequelize, DataTypes) => {
	const ProductSubSubcategory = sequelize.define(
		"ProductSubSubcategory",
		{
			uuid: {
				type: DataTypes.STRING,
				primaryKey: true,

				allowNull: false,
			},
			subcategoryUuid: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "ProductSubSubcategory",
		}
	);

	return ProductSubSubcategory;
};

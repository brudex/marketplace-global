module.exports = (sequelize, DataTypes) => {
	const ProductImages = sequelize.define(
		"ProductImages",
		{
			productUuid: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			imageUrl: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			default: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
		},
		{
			tableName: "ProductImages",
		}
	);

	ProductImages.associate = (models) => {
		ProductImages.belongsTo(models.Product, { foreignKey: "productUuid" });
	};
	return ProductImages;
};

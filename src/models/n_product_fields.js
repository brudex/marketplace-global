module.exports = (sequelize, DataTypes) => {
	const ProductFields = sequelize.define(
		"ProductFields",
		{
			fieldName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			fieldValue: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			productUuid: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			fieldLabel: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "ProductFields",
		}
	);

	ProductFields.associate = (models) => {
		ProductFields.belongsTo(models.Product, { foreignKey: "productUuid" });
	};
	return ProductFields;
};

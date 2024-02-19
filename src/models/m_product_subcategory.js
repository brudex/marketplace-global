import { v4 as uuidv4 } from "uuid";

module.exports = (sequelize, DataTypes) => {
	const ProductSubcategory = sequelize.define(
		"ProductSubcategory",
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: () => uuidv4(),
				primaryKey: true,

				allowNull: false,
			},
			//zoneUuid: DataTypes.STRING,
			categoryUuid: DataTypes.STRING,
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "ProductSubcategory",
		}
	);

	ProductSubcategory.associate = (models) => {
		ProductSubcategory.belongsTo(models.ProductCategory, {
			foreignKey: "categoryUuid",
		});
		// Add other associations as needed
	};

	return ProductSubcategory;
};

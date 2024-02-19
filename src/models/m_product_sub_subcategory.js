import { v4 as uuidv4 } from "uuid";

module.exports = (sequelize, DataTypes) => {
	const ProductSubSubcategory = sequelize.define(
		"ProductSubSubcategory",
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: () => uuidv4(),
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

	ProductSubSubcategory.associate = (models) => {
		ProductSubSubcategory.belongsTo(models.ProductSubcategory, {
			foreignKey: "subcategoryUuid",
		});
	};

	return ProductSubSubcategory;
};

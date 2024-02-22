import { v4 as uuidv4 } from "uuid";

module.exports = (sequelize, DataTypes) => {
	const ProductSubcategory = sequelize.define(
		"ProductSubcategory",
		{
			uuid: {
				type: DataTypes.STRING,

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

	return ProductSubcategory;
};

module.exports = (sequelize, DataTypes) => {
    const ProductSubcategory = sequelize.define(
        "ProductSubcategory",
        {
            uuid: DataTypes.STRING,
            zoneUuid: DataTypes.STRING,
            categoryUuid: DataTypes.STRING,
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
         },
        {
            tableName: "ProductSubcategory"
        }
    );

    ProductSubcategory.associate = (models) => {
        ProductSubcategory.belongsTo(models.ProductCategory);
        // Add other associations as needed
    };

    return ProductSubcategory;
};

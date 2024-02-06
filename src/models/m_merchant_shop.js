module.exports = (sequelize, DataTypes) => {
    const MerchantShop = sequelize.define(
        "MerchantShop",
        {
            uuid: DataTypes.STRING,
            merchantUuid: DataTypes.STRING,
            shopName: DataTypes.STRING,
            description: DataTypes.STRING,
            zoneUuid: DataTypes.STRING,
            shopCategoryUuid: DataTypes.STRING,
        },
        {
            tableName: "MerchantShop"
        }
    );
    return MerchantShop;
};

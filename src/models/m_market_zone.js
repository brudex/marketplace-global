module.exports = (sequelize, DataTypes) => {
    const MarketZone = sequelize.define(
        "MarketZone",
        {
            uuid: DataTypes.STRING,
            name: DataTypes.STRING,
            description: DataTypes.STRING,
        },
        {
            tableName: "MarketZone"
        }
    );
    return MarketZone;
};

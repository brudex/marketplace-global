module.exports = (sequelize, DataTypes) => {
	const Merchant = sequelize.define(
		"Merchant",
		{
			uuid: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			fullName: DataTypes.STRING,
			dateOfBirth: DataTypes.DATE,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
			idCardNumber: DataTypes.STRING,
		},
		{
			tableName: "Merchant",
		}
	);
	return Merchant;
};

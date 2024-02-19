const crypto = require("crypto");
import { v4 as uuidv4 } from "uuid";

module.exports = (sequelize, DataTypes) => {
	const Merchant = sequelize.define(
		"Merchant",
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: () => uuidv4(),
				primaryKey: true,
			
				allowNull: false,
			},

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

	Merchant.beforeCreate(async (user, options) => {
		const saltHash = await crypto.randomBytes(32).toString();
		const hashPassword = await crypto
			.pbkdf2Sync(user.password, saltHash, 10000, 64, "sha512")
			.toString("hex");
		user.password = hashPassword;
		user.password_key = saltHash;
	});

	Merchant.associate = (models) => {
		Merchant.hasMany(models.MerchantShop, {
			foreignKey: "merchantUuid",
			onDelete: "CASCADE",
		});
	};

	return Merchant;
};

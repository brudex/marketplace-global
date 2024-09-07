const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
	const Merchant = sequelize.define(
		"Merchant",
		{
			// uuid: {
			// 	type: DataTypes.STRING,
			// 	primaryKey: true,
			// 	allowNull: false,
			// },
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			fullName: DataTypes.STRING,
			dateOfBirth: DataTypes.STRING,
			email: DataTypes.STRING,
			password: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: { msg: "" }, // ADD mensagem de erro
				},
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			password_key: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: { msg: "" }, // ADD mensagem de erro
				},
			},
			phoneNumber: DataTypes.STRING,
			idCardNumber: DataTypes.STRING,
			imageUrl: {
				type: DataTypes.STRING,
				allowNull: true,
			},
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

	Merchant.comparePassword = async (password, user) => {
		const hashVerify = await crypto
			.pbkdf2Sync(password, user.password_key, 10000, 64, "sha512")
			.toString("hex");
		return user.password_hash === hashVerify;
	};

	return Merchant;
};

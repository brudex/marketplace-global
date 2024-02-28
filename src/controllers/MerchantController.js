const db = require("../models");

const { Merchant } = db.sequelize.models;

const MerchantController = {
	async createMerchant(req, res) {
		const {
			firstName,
			lastName,
			fullName,
			dateOfBirth,
			email,
			password,
			phoneNumber,
			idCardNumber,
		} = req.body;

		const merchant = await Merchant.create({
			firstName,
			lastName,
			fullName,
			dateOfBirth,
			email,
			password,
			phoneNumber,
			idCardNumber,
		});

		res.json({
			message: "done",
		});

		// res.render("page/home", { session: false });
	},
};

module.exports = MerchantController;

// export default MerchantController;

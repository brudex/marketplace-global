const db = require("../models");

const { MerchantShop } = db.sequelize.models;
const MerchantController = {
	async createMerchantShop(req, res) {
		const { merchantUuid, shopName, description, zoneUuid, shopCategoryUuid } =
			req.body;

		const findShop = await MerchantShop.findOne({
			where: { shopName, merchantUuid },
		});
		if (findShop) {
			return res.status(403).json({
				message: "Shop already exist",
			});
		}
		await MerchantShop.create({
			merchantUuid,
			shopName,
			description,
			zoneUuid,
			shopCategoryUuid,
		});

		res.json({
			message: "done",
		});

		// res.render("page/home", { session: false });
	},
};

module.exports = MerchantController;

const db = require("../models");
const { MerchantShopCategory } = db.sequelize.models;
const MerchantShopCategoryController = {
	async createMerchantShopCategory(req, res) {
		const { name, description, merchantShopUuid } = req.body;

		const findShop = await MerchantShopCategory.findOne({
			where: { name, merchantShopUuid },
		});
		if (findShop) {
			return res.status(403).json({
				message: "Shop category already exist",
			});
		}
		await MerchantShopCategory.create({
			...req.body,
		});
		res.json({
			message: "done",
		});

		// res.render("page/home", { session: false });
	},
};

module.exports = MerchantShopCategoryController;

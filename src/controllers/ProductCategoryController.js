const db = require("../models");
const { ProductCategory } = db.sequelize.models;
const ProductCategoryController = {
	async createProductCategory(req, res) {
		const { name, zoneUuid } = req.body;

		const findProductCategory = await ProductCategory.findOne({
			where: { name, zoneUuid },
		});

		if (findProductCategory) {
			return res.status(403).json({
				message: "Product category already exist",
			});
		}
		const productCategory = await ProductCategory.create({ name, zoneUuid });

		res.json({
			message: "done",
			data: productCategory,
		});
		// res.render("page/home", { session: false });
	},
};

module.exports = ProductCategoryController;

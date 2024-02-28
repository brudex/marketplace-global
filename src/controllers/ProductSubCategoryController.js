const db = require("../models");
const { ProductSubcategory } = db.sequelize.models;
const ProductSubCategoryController = {
	async createProductSubCategory(req, res) {
		const { name, categoryUuid } = req.body;

		const findProductSubCategory = await ProductSubcategory.findOne({
			where: { name, categoryUuid },
		});

		if (findProductSubCategory) {
			return res.status(403).json({
				message: "Product subcategory already exist",
			});
		}
		const productCategory = await ProductSubcategory.create({
			name,
			categoryUuid,
		});

		res.json({
			message: "done",
			data: productCategory,
		});
		// res.render("page/home", { session: false });
	},
};

module.exports = ProductSubCategoryController;

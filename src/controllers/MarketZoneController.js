import db from "../models";
const {
	MarketZones,
	ProductCategory,
	ProductSubcategory,
	ProductSubSubcategory,
	MerchantShop,
	MerchantShopCategory,
} = db.sequelize.models;
const MarketZoneController = {
	async createMarketZone(req, res) {
		const { name, description } = req.body;

		const marketZone = await MarketZones.create({ name, description });
		await marketZone.save();
		res.json({
			message: "done",
		});
		// res.render("page/home", { session: false });
	},

	async getAllZones(req, res) {
		const mzone = await MarketZones.findAll({
			include: [
				{
					model: MerchantShop,
				},
			],
		});
		res.json({
			data: mzone,
			message: "Data successfully retrieved",
			status: "success",
		});
	},
};

export default MarketZoneController;

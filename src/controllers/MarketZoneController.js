import db from "../models";
const {
	MarketZones,
	ProductCategory,
	ProductSubcategory,
	ProductSubSubcategory,
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
		const { name, description } = req.body;

		const result = await MarketZones.findAll({
			include: [
				{
					model: ProductCategory,
					include: [
						{
							model: ProductSubcategory,
							include: [
								{
									model: ProductSubSubcategory,
								},
							],
						},
					],
				},
			],
		});
		res.json({
			data: result,
			message: "Data successfully retrieved",
			status: "success",
		});
	},
};

export default MarketZoneController;

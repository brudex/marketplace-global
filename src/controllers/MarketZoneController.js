import db from "../models";
const { MarketZone } = db.sequelize.models;
const MarketZoneController = {
	async createMarketZone(req, res) {
		const { name, description } = req.body;

		const marketZone = await MarketZone.create({ name, description });

		// res.render("page/home", { session: false });
	},
};

export default MarketZoneController;

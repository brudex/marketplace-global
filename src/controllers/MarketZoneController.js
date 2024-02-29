const { QueryTypes } = require("sequelize");
const db = require("../models");

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

	async renderZoneById(req, res) {
		const id = req.params.id;
		const findByUUID = await MarketZones.findOne({
			where: {
				zone_uuid: id,
			},
			raw: true,
		});

		if (!findByUUID) {
			return res.redirect("/");
		}

		///Get necessary categories

		const result = await db.sequelize.query(
			`SELECT msc.*, mz.name AS zone_name
		FROM "MerchantShopCategory" msc
		JOIN "MarketZones" mz ON msc.zone_uuid = mz.zone_uuid
		and msc."zone_uuid"='${findByUUID.zoneUuid}'
		`,
			{ type: QueryTypes.SELECT, raw: true }
		);
		console.log("result>>", result);
		res.locals.categories = result;

		res.render("page/zonebyId", {
			title: `${findByUUID.name}`,
			layout: "layout/zonebyid",
		});
	},
};

module.exports = MarketZoneController;

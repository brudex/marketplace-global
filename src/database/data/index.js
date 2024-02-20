const Zones = require("./zones");
import db from "../../models";
const { MarketZones } = db.sequelize.models;

async function populateMarketZones() {
	const existingZones = await MarketZones.findAll();
	if (existingZones.length > 0) return;
	await MarketZones.bulkCreate(Zones, { returning: true });
}

populateMarketZones();

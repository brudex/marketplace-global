const db = require("../../models");
const Zones = require("./zones");
const { MarketZones } = db.sequelize.models;

async function  populateMarketZones(){
	const existingZones = await MarketZones.findAll();
	if(existingZones.length > 0) return;
	await db.MarketZones.bulkCreate(Zones, { returning: true });
}

populateMarketZones();


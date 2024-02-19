const uuidv4 = require("uuid").v4;

const MarketZones = [{
	uuid:  uuidv4(),
	name: "Ecommerce",
	description: "Zone 1 description"
}, {
	uuid: uuidv4(),
	name: "Business",
	description: "Zone 2 description"
}, {
	uuid: uuidv4(),
	name: "Zone 3",
	description: "Zone 3 description"
}, {
	uuid: uuidv4(),
	name: "Zone 4",
	description: "Zone 4 description"
}, {
	uuid: uuidv4(),
	name: "Zone 5",
	description: "Zone 5 description"
}];


module.exports = MarketZones;

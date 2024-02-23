const uuidv4 = require("uuid").v4;
import MarketZones from "./zones";
import MerchantShop from "./merchantshop";

const MarketShopCategory = [
	{
		uuid: uuidv4(),
		zoneUuid: MarketZones[1].uuid,
		merchantShopUuid: MerchantShop[0].uuid,
		name: "Merchant",

		description: "",
	},
	{
		uuid: uuidv4(),
		zoneUuid: MarketZones[1].uuid,
		merchantShopUuid: MerchantShop[0].uuid,
		name: "Building Materials",
		description: "",
	},
	{
		uuid: uuidv4(),
		zoneUuid: MarketZones[1].uuid,
		merchantShopUuid: MerchantShop[0].uuid,
		name: "Home Services",
		description: "",
	},
	{
		uuid: uuidv4(),
		zoneUuid: MarketZones[1].uuid,
		merchantShopUuid: MerchantShop[0].uuid,
		name: "Cars",
		description: "",
	},

	//  Businness

	{
		uuid: uuidv4(),
		zoneUuid: MarketZones[3].uuid,
		merchantShopUuid: MerchantShop[0].uuid,
		name: "Recruitment",
		description: "",
	},
	{
		uuid: uuidv4(),
		zoneUuid: MarketZones[3].uuid,
		merchantShopUuid: MerchantShop[0].uuid,
		name: "Video/Business Empowerment & Seminars/Summits",
		description: "",
	},
	{
		uuid: uuidv4(),
		zoneUuid: MarketZones[3].uuid,
		merchantShopUuid: MerchantShop[0].uuid,
		name: "Entrepreneurs Networking",
		description: "",
	},

	// Entertainment
	{
		uuid: uuidv4(),
		zoneUuid: MarketZones[4].uuid,
		merchantShopUuid: MerchantShop[0].uuid,
		name: "Vidoes/Music",
		description: "",
	},

	// Chat Room

	{
		uuid: uuidv4(),
		zoneUuid: MarketZones[2].uuid,
		merchantShopUuid: MerchantShop[0].uuid,
		name: "Hangout/Networking",
		description: "",
	},
	{
		uuid: uuidv4(),
		zoneUuid: MarketZones[2].uuid,
		merchantShopUuid: MerchantShop[0].uuid,
		name: "Services",
		description: "",
	},
];

module.exports = MarketShopCategory;

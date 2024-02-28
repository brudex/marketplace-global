const uuidv4 = require("uuid").v4;

const Merchant = require("./merchant");
const { defaultShop } = require("./zones");

const MerchantShop = [
	{
		uuid: uuidv4(),
		zoneUuid: defaultShop,
		shopName: "Valtrine Shop",
		merchantUuid: Merchant[0].uuid,
	},
];

module.exports = MerchantShop;

const uuidv4 = require("uuid").v4;

import Merchant from "./merchant";
import { defaultShop } from "./zones";
console.log("defaultShop>>", defaultShop);
const MerchantShop = [
	{
		uuid: uuidv4(),
		zoneUuid: defaultShop,
		shopName: "Valtrine Shop",
		merchantUuid: Merchant[0].uuid,
	},
];

module.exports = MerchantShop;

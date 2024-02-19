const db = require("./models");
const AppGlobalData = {};

function fetchCategories() {
	 db.MerchantShopCategory.findAll().then(function (categories) {
		AppGlobalData.categories = categories;
	 })
}


function fetchZones() {
	 db.MarketZones.findAll().then(function (zones) {
		AppGlobalData.zones = zones;
	 })
}

fetchZones();
fetchCategories();

module.exports= AppGlobalData;

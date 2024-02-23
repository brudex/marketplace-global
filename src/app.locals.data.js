import db from "./models";
const { MerchantShopCategory, MarketZones } = db.sequelize.models;
const AppLocalsData = {categories:[],zones:[]};

function fetchCategories() {
 MerchantShopCategory.findAll({ raw: true }).then(function (categories){
	 console.log("Shop categories fetched >>"+categories.length);
	 AppLocalsData.categories = categories;
 });

}

function fetchZones() {
	MarketZones.findAll({ raw: true }).then(function (zones){
		console.log("Zones fetched >>>"+zones.length)
		AppLocalsData.zones =zones;
	})
}

function populateAppLocals(callback){
	fetchCategories();
	 fetchZones();
	if(callback){
		callback(AppLocalsData)
	}

}

function getLocalsData(){
	 return AppLocalsData
}

module.exports = {
	populateAppLocals,
	getLocalsData
};

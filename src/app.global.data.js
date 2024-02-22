import db from "./models";
const { MerchantShopCategory, MarketZones } = db.sequelize.models;
const AppGlobalData = {};

export async function fetchCategories() {
	const mshopcategory = await MerchantShopCategory.findAll({ raw: true });
	AppGlobalData.categories = mshopcategory;
	return mshopcategory;
}

export async function fetchZones() {
	const mzone = await MarketZones.findAll();

	// const mzone = await MarketZones.findAll({
	// 	include: [
	// 		{
	// 			model: MerchantShop,
	// 			include: [
	// 				{
	// 					model: MerchantShopCategory,
	// 					include: [
	// 						{
	// 							model: ProductSubSubcategory,
	// 						},
	// 					],
	// 				},
	// 			],
	// 		},
	// 	],
	// });
	AppGlobalData.zones = mzone;
	return mzone;
	// console.log("mzone", mzone);
}

fetchCategories();
fetchZones();
module.exports = AppGlobalData;

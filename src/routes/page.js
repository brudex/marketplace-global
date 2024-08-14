const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const HomePageController = require("../controllers/HomePageController");

const {
	isAuthenticated,
	isNotAuthenticated,
	authenticateLogin,
	authenticateRegister,
} = require("../config/auth");
const MarketZoneController = require("../controllers/MarketZoneController");
const MerchantShopCategoryController = require("../controllers/MerchantShopCategoryController");
const ProductController = require("../controllers/ProductController");

// Rotas Get
router.get("/", UserController.getIndex);
router.get("/about", UserController.getAbout);
router.get("/contact", UserController.getContact);

router.get("/login", isNotAuthenticated, UserController.getLogin);
router.get("/register", isNotAuthenticated, UserController.getRegister);
router.get("/logout", UserController.getLogout);
router.get("/contactus", isAuthenticated, UserController.getAuth);

// Rota autenticada
router.get("/auth", isAuthenticated, UserController.getAuth);

// Rotas Post
router.post("/register", authenticateRegister);
router.post("/login", authenticateLogin);
router.get("/account", HomePageController.getHomePage);

router.get("/marketzone/zones/:id", MarketZoneController.renderZoneById);

router.get(
	"/marketzone/zones/merchantcategory/:id",
	MarketZoneController.getPageByMerchantId
);

router.get(
	"/merchantshopcategory/:zoneuuid",
	MerchantShopCategoryController.getMerchantShopByZoneId
);

router.get("/error", () => {
	throw new Error("Erro Interno");
});

router.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

router.get("/product/:productuuid", ProductController.getProduct);

// let info = [];
// const data = appLocalsData.populateAppLocals(function (appLocals) {
// 	// console.log("Apps locals Populated >>", appLocals);
// 	return appLocals;
// });

// console.log("data>>", data);

// router.use(async function (err, req, res, next) {
// 	res.locals.categories = [];
// 	res.locals.zones = [];
// 	next();
// });

// export default router;
module.exports = router;

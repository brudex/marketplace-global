const { Router } = require("express");
const UserController = require("../controllers/UserController");
const HomePageController = require("../controllers/HomePageController");
const MarketZoneRouter = require("./marketzone");

const MerchantRouter = require("./merchant");
const MerchantShopRouter = require("./merchantshop");
const MerchantShopCategoryRouter = require("./merchantshopcategory");

const ProductCategoryRouter = require("./productcategory");
const ProductSubCategoryRouter = require("./productsubcategory");
const ProductSubSubCategoryRouter = require("./productsubsubcategory");

const appLocalsData = require("../app.locals.data");
const {
	isAuthenticated,
	isNotAuthenticated,
	authenticateLogin,
	authenticateRegister,
} = require("../config/auth");

const router = Router();

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
router.get("/home", HomePageController.getHomePage);

router.use("/marketzone", MarketZoneRouter);
router.use("/merchant", MerchantRouter);
router.use("/merchantshop", MerchantShopRouter);
router.use("/merchantshopcategory", MerchantShopCategoryRouter);
router.use("/productcategory", ProductCategoryRouter);
router.use("/productsubcategory", ProductSubCategoryRouter);
router.use("/productsubsubcategory", ProductSubSubCategoryRouter);

router.get("/error", (req, res) => {
	throw new Error("Erro Interno");
});

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

export default router;
module.exports = router;

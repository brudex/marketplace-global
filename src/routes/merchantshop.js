const { Router } = require("express");

const MerchantShopController = require("../controllers/MerchantShopController");

const router = Router();

// Rotas Get

router.post("/create", MerchantShopController.createMerchantShop);

// router.get("/", MarketZoneController.getIndex);
// router.get("/about", UserController.getAbout);
// router.get("/contact", UserController.getContact);

// router.get("/login", isNotAuthenticated, UserController.getLogin);
// router.get("/register", isNotAuthenticated, UserController.getRegister);
// router.get("/logout", UserController.getLogout);
// router.get("/contactus", isAuthenticated, UserController.getAuth);

// router.get("/error", (req, res) => {
// 	throw new Error("Erro Interno");
// });

module.exports = router;

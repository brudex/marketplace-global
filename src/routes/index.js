import { Router } from "express";
import UserController from "../controllers/UserController";
import HomePageController from "../controllers/HomePageController";
import MarketZoneRouter from "./marketzone";

import MerchantRouter from "./merchant";
import MerchantShopRouter from "./merchantshop";
import MerchantShopCategoryRouter from "./merchantshopcategory";

import ProductCategoryRouter from "./productcategory";
import ProductSubCategoryRouter from "./productsubcategory";
import ProductSubSubCategoryRouter from "./productsubsubcategory";

import {
	isAuthenticated,
	isNotAuthenticated,
	authenticateLogin,
	authenticateRegister,
} from "../config/auth";

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

export default router;

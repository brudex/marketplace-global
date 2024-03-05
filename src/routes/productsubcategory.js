const express = require("express");
const router = express.Router();

const ProductSubCategoryController = require("../controllers/ProductSubCategoryController");

// import { isAuthenticated } from "../config/auth";

// Rotas Get

router.post("/create", ProductSubCategoryController.createProductSubCategory);

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

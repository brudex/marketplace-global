const express = require("express");

const AuthController = require("../controllers/AuthController");

const AuthMiddleware = require("../../../middleware/auth");

const router = express.Router();

router.post("/user/login", AuthController.login);
router.post("/user/me/logout", AuthMiddleware, AuthController.logout);

export default router;

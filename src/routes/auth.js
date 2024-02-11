import express from "express";
import AuthController from "../controllers/AuthController";
import AuthMiddleware from "../../../middleware/auth";

const router = express.Router();

router.post("/user/login", AuthController.login);
router.post("/user/me/logout", AuthMiddleware, AuthController.logout);

export default router;

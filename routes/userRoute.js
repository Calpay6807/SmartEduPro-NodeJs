import express from "express";
import createUser, { loginUser } from "../controllers/authController.js";

const router = express.Router();

router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
export default router;

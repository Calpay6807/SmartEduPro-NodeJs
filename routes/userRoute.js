import express from "express";
import createUser, {
  loginUser,
  logoutUser,
  routeDashboardPage,
} from "../controllers/authController.js";
import { costumMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/dashboard").get(costumMiddleware, routeDashboardPage);
export default router;

// http://localhost:3000/users/dashboard

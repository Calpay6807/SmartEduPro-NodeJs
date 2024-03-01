import express from "express";
import {
  routHomePage,
  routeAboutPage,
  routeLoginPage,
  routeRegisterPage,
} from "../controllers/pageController.js";
import { redirectCostuMiddleware } from "../middlewares/redirectMiddleware.js";

const router = express.Router();

router.route("/").get(routHomePage);
router.route("/about").get(routeAboutPage);
router.route("/register").get(redirectCostuMiddleware, routeRegisterPage);
router.route("/login").get(redirectCostuMiddleware, routeLoginPage);
export default router;

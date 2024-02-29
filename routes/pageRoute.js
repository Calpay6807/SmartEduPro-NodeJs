import express from "express";
import {
  routHomePage,
  routeAboutPage,
  routeLoginPage,
  routeRegisterPage,
} from "../controllers/pageController.js";

const router = express.Router();

router.route("/").get(routHomePage);
router.route("/about").get(routeAboutPage);
router.route("/register").get(routeRegisterPage);
router.route("/login").get(routeLoginPage);
export default router;

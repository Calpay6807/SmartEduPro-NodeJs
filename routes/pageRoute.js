import express from "express";
import { routHomePage, routeAboutPage } from "../controllers/pageController.js";

const router = express.Router();

router.route("/").get(routHomePage);
router.route("/about").get(routeAboutPage);

export default router;

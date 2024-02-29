import express from "express";
import createCategory from "../controllers/categoryController.js";

const routerCategory = express.Router();

routerCategory.route("/").post(createCategory);

export default routerCategory;

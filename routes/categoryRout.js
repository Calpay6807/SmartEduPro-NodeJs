import express from "express";
import createCategory, {
  deleteCategory,
} from "../controllers/categoryController.js";

const routerCategory = express.Router();

routerCategory.route("/").post(createCategory);
routerCategory.route("/:id").delete(deleteCategory);

export default routerCategory;

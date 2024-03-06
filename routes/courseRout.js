import express from "express";
import createCourse, {
  getAllCourses,
  getCourses,
} from "../controllers/courseController.js";
import { costumeRoleMiddlewares } from "../middlewares/roleMiddlewares.js";

const router = express.Router();

router
  .route("/")
  .post(costumeRoleMiddlewares(["teacher", "admin"]), createCourse);
router.route("/").get(getAllCourses);
router.route("/:slug").get(getCourses);

export default router;

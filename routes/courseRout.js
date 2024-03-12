import express from "express";
import createCourse, {
  deleteCourse,
  enrollCourse,
  getAllCourses,
  getCourses,
  relaseCourse,
  updateCourse,
} from "../controllers/courseController.js";
import { costumeRoleMiddlewares } from "../middlewares/roleMiddlewares.js";

const router = express.Router();

router
  .route("/")
  .post(costumeRoleMiddlewares(["teacher", "admin"]), createCourse);
router.route("/").get(getAllCourses);
router.route("/:slug").get(getCourses);
router.route("/enroll").post(enrollCourse);
router.route("/release").post(relaseCourse);
router.route("/:slug").delete(deleteCourse);
router.route("/:slug").put(updateCourse);

export default router;

import express from "express";
import createCourse, {
  getAllCourses,
  getCourses,
} from "../controllers/courseController.js";

const router = express.Router();

router.route("/").post(createCourse);
router.route("/").get(getAllCourses);
router.route("/:slug").get(getCourses);

export default router;

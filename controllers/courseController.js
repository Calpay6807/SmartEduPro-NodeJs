import { Category } from "../models/Category.js";
import { Course } from "../models/Course.js";

const createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      user: req.session.userID,
    });

    res.status(201).redirect("/courses");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
export const getAllCourses = async (req, res) => {
  try {
    const categorySlug = req.query.categories;

    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};
    if (categorySlug) {
      filter = { category: category._id };
    }
    const courses = await Course.find(filter).sort("-createdAt");
    const categories = await Category.find();

    res
      .status(200)
      .render("courses", { courses, page_name: "courses", categories });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
export const getCourses = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    res.status(200).render("course", { course, page_name: "courses" });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export default createCourse;

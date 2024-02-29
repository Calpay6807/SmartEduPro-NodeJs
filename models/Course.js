import mongoose from "mongoose";
import slugify from "slugify";

const { Schema } = mongoose;

const CourseSchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, trim: true, required: true },
  createdDate: { type: Date, default: Date.now },
  slug: {
    type: String,
    unique: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

CourseSchema.pre("validate", function (next) {
  this.slug = slugify(this.name, { lower: true, strict: true });
  next();
});
const Course = mongoose.model("Course", CourseSchema);
export { Course };

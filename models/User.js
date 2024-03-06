import mongoose from "mongoose";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
    default: "student",
  },
});
UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    user.password = hash;
    next();
  });
});
const User = mongoose.model("UserSchema", UserSchema);
export { User };

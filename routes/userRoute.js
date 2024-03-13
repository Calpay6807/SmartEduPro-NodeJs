import express from "express";
import createUser, {
  deleteUser,
  loginUser,
  logoutUser,
  routeDashboardPage,
} from "../controllers/authController.js";
import { costumMiddleware } from "../middlewares/authMiddleware.js";
import { body } from "express-validator";
import { User } from "../models/User.js";
const router = express.Router();

router.route("/signup").post(
  [
    body("name").not().isEmpty().withMessage("Please Entry Name"),

    body("email")
      .isEmail()
      .withMessage("Please Entry email")
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          if (user) {
            return Promise.reject("Email is already exists!");
          }
        });
      }),

    body("password").not().isEmpty().withMessage("Please Entry password"),
  ],
  createUser
);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/dashboard").get(costumMiddleware, routeDashboardPage);
router.route("/:id").delete(deleteUser);

export default router;

// http://localhost:3000/users/dashboard

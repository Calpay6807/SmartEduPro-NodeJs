import express from "express";
import createUser from "../controllers/authController.js";

const routerUser = express.Router();

routerUser.route("/signup").post(createUser);
export default routerUser;

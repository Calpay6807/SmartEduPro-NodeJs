import { User } from "../models/User.js";

export const costumMiddleware = (req, res, next) => {
  User.findById(req.session.userID)
    .then((user) => {
      if (!user) {
        return res.redirect("/login");
      }
      next();
    })
    .catch((err) => {
      console.error("Middleware error:", err);
      return res.status(500).send("Internal Server Error");
    });
};

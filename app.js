import express from "express";
import pageRoute from "./routes/pageRoute.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import courseRoute from "./routes/courseRout.js";
import routerCategory from "./routes/categoryRout.js";
import routerUser from "./routes/userRoute.js";
const app = express();

//connect db
mongoose
  .connect("mongodb://localhost:27017/smartedu-db")
  .then(() => console.log("Connected!"));
// template enginee
app.set("view engine", "ejs");

// middlewire
app.use(express.static("public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing

// routes:yönlendirme işlemleri
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", routerCategory);
app.use("/users", routerUser);
const port = 3000;
app.listen(port, () => {
  console.log(`example app listening ın port ${port}`);
});

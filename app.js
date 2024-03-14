import express from "express";
import MongoStore from "connect-mongo";
import pageRoute from "./routes/pageRoute.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import methodOverride from "method-override";
import session from "express-session";
import flash from "connect-flash";
import courseRoute from "./routes/courseRout.js";
import routerCategory from "./routes/categoryRout.js";
import routerUser from "./routes/userRoute.js";
import "dotenv/config";
const app = express();

//connect db
mongoose
  .connect("mongodb://localhost:27017/smartedu-db")
  .then(() => console.log("Connected!"));
// template enginee
app.set("view engine", "ejs");

// global variable

global.userIn = null;

// middlewire

app.use(express.static("public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://alpayc3:5h9o1kHW8MWp5W96@cluster0.rtgwct6.mongodb.net/",
    }),
  })
);

app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});
app.use("*", (req, res, next) => {
  userIn = req.session.userID;
  next();
});

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// routes:yönlendirme işlemleri
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", routerCategory);
app.use("/users", routerUser);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`example app listening ın port ${port}`);
});

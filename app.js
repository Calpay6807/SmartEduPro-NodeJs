import express from "express";

const app = express();

// template enginee
app.set("view engine", "ejs");

// middlewire
app.use(express.static("public"));

// routes:yönlendirme işlemleri
app.get("/", (req, res) => {
  res.status(200).render("index", { page_name: "index" });
});
app.get("/about", (req, res) => {
  res.status(200).render("about", { page_name: "about" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`example app listening ın port ${port}`);
});

const routHomePage = (req, res) => {
  res.status(200).render("index", { page_name: "index" });
};
const routeAboutPage = (req, res) => {
  res.status(200).render("about", { page_name: "about" });
};
const routeRegisterPage = (req, res) => {
  res.status(200).render("register", { page_name: "register" });
};
export { routHomePage, routeAboutPage, routeRegisterPage };

const routHomePage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render("index", { page_name: "index" });
};
const routeAboutPage = (req, res) => {
  res.status(200).render("about", { page_name: "about" });
};
const routeRegisterPage = (req, res) => {
  res.status(200).render("register", { page_name: "register" });
};
const routeLoginPage = (req, res) => {
  res.status(200).render("login", { page_name: "login" });
};
export { routHomePage, routeAboutPage, routeRegisterPage, routeLoginPage };

import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import { routHomePage } from "./pageController.js";
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // E-posta ile kullanıcıyı bulun
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("Kullanıcı bulunamadı");
    }

    // Şifreleri karşılaştırın
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send("Şifre eşleşmedi");
    }

    req.session.userID = user._id;
    res.status(200).redirect("/users/dashboard");
  } catch (error) {
    res.status(400).json({
      status: "başarısız",
      hata: error.message,
    });
  }
};

export const logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

export const routeDashboardPage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userID });
  res.status(200).render("dashboard", { page_name: "dashboard", user });
};
export default createUser;

import nodemailer from "nodemailer";
import { Course } from "../models/Course.js";
import { User } from "../models/User.js";

const routHomePage = async (req, res) => {
  const courses = await Course.find().sort("-createdAt").limit(2);
  const totalCourses = await Course.find().countDocuments();
  const totalStudents = await User.countDocuments({ role: "student" });
  const totalTeacher = await User.countDocuments({ role: "teacher" });

  res.status(200).render("index", {
    page_name: "index",
    courses,
    totalCourses,
    totalStudents,
    totalTeacher,
  });
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
const routeContactPage = (req, res) => {
  res.status(200).render("contact", { page_name: "contact" });
};
const sendEmail = async (req, res, next) => {
  try {
    const outputMessage = `
 <h1>Mail Details</h1>
 <ul>
 <li>Name:${req.body.name}</li>
 <li>Email:${req.body.email}</li>
 </ul>
 <h1> Messages</h1>
 <p>${req.body.message}</p>

 `;

    // secret areaa
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "alpaycal125@gmail.com",
        pass: "xohr zppp kvct ujjf1",
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"smart edu 👻" <alpaycal125@gmail.com>', // sender address
      to: "alpayc3@gmail.com ",
      subject: "new message ✔", // Subject line
      text: "Hello world?", // plain text body
      html: outputMessage, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

    req.flash("success", "We Received Your Message Succesfully");
    res.status(200).redirect("contact");
  } catch (err) {
    req.flash("error", `Something happend ${err}`);
    res.status(200).redirect("contact");
  }
};
export {
  routHomePage,
  routeAboutPage,
  routeRegisterPage,
  routeLoginPage,
  routeContactPage,
  sendEmail,
};

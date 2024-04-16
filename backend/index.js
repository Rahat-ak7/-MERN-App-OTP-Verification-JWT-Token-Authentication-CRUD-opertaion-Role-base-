const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModal = require("./models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const RegesModal = require("./models/LoginSign");
const OtpModal = require("./models/opt");
const nodemailer = require("nodemailer");
// const { adminRouter } = require("./Routes/AdminRoute.js");

const app = express();
//MIDDLEWIRE
app.use(
  cors({
    origin: ["http://localhost:3000"], //we will data get from this
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
); // server and client side acess

app.use(express.json()); //pass data from frnt end to back end it parse into json format
app.use(cookieParser());

// app.use('/auth',adminRouter)

//CONNECTION WITH LOCAL
mongoose.connect("");
// -----------------------------------------------------------------------------------------------------------
//Send OTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rahat.jadoon456@gmail.com", //  email
    pass: "bcpz kzxv vkry y", // Replace with your Gmail password
  },
});

//GENERATE OTP:

const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();

const otpStore = {};

app.post("/send-otp", (req, res) => {
  const { email } = req.body;
  console.log("🚀 ~ app.post ~ email:", email);

  const otp = generateOTP();
  console.log("🚀 ~ app.post ~ otp:", otp);
  otpStore[email] = otp;
  const mailOptions = {
    from: "rahat.jadoon456@gmail.com",
    to: email,
    subject: "Email Verification OTP",
    text: `Your OTP for email verification is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    const a = new OtpModal({ email, otp });
    a.save();
    res.status(200).send("OTP sent successfully.");
  });
});

//______________________________________________________________________________________
//REGISTER-DETAIL
const VarifyUser = (req, res, next) => {
  //if successed then call next  fun
  const token = req.cookies.token;
  if (!token) {
    return res.json("Token is Missing");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      //decoded values email,role

      if (err) {
        return res.json("Error with token");
      } else {
        if (decoded.role === "admin") {
          next();
        } else {
          return res.json("not admin  ");
        }
      }
    });
  }
};

app.get("/dashboard", VarifyUser, (req, res) => {
  res.json("Success");
});

//Regester:
app.post("/register", async (req, res) => {
  const { name, email, password, otp } = req.body;
  const verifyOtp = await OtpModal.find({ email });
  const arr = [];
  verifyOtp?.map((item) => {
    if (item?.otp === otp) {
      arr.push(item);
    }
  });
  if (arr?.length === 0) {
    return res.json({ message: "Wrong OTP" });
  }
  await OtpModal.deleteMany({ email });
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      RegesModal.create({ name, email, password: hash })
        .then((user) => res.json({ message: "User Created Successfully..." }))
        .catch((err) => res.json({ message: "User not Registered" }));
    })
    .catch((err) => res.json(err));
});

//LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegesModal.findOne({ email: email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, Response) => {
          if (Response) {
            const token = jwt.sign(
              { email: user.email, role: user.role },
              "jwt-secret-key",
              { expiresIn: "1d" }
            );
            res.cookie("token", token);

            return res.json({ Status: "Sucessful", role: user.role });
          } else {
            return res.json("The password is incorrect");
          }
        });
      } else {
        return res.json("No record existed");
      }
    })
    .catch((err) => res.json(err));
});

// _______________________________________________________________________________________
//CRUD DETAIL
//GET USERS
app.get("/getUser", (req, res) => {
  UserModal.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//GET USER BY ID
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModal.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//UPDATE USER
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModal.findByIdAndUpdate(
    { _id: id },
    {
      resturantname: req.body.resturantname,
      ownername: req.body.ownername,
      contactno: req.body.contactno,
      address: req.body.address,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//DELETE USER
app.delete("/deleteUser/:id", (req, res) => {
  const { id } = req.params;
  UserModal.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

//ADD USERS
app.post("/createUser", (req, res) => {
  UserModal.create(req.body) //data which send from front end attcached with this.
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// __________________________________________________________________
//SERVER
app.listen(3001, () => {
  console.log("server is running");
});

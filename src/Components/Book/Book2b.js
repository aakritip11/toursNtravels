const express = require("express");
const Book2b = express();
Book2b.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
Book2b.use(cors({origin: ["http://localhost:3000"]}));
const jwt = require("jsonwebtoken")

const JWT_SECRET = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssd7m'
const mongoUrl = process.env.MONGO_URL || "mongodb+srv://aakriti11:pathak03@cluster0.wojfzvo.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log("Connect to database");}).catch((e) => console.log("Error", e));

require("./Book2Details")
require("../Account/UserDetails");

const UserInfo = mongoose.model("UserInfo");
const User = mongoose.model("BookingUserDetails");

Book2b.post("/booking2", async (req, res) => {
  const { name, address, phone, email, cityf, cityt, date1, date2, country, state, persons } = req.body;
  try {
      const oldUser = await UserInfo.findOne({email});
      if (!oldUser) {
        return res.send({error: "You are not registered"});
      }
      await User.create({
          name,
          address,
          phone,
          email,
          cityf,
          cityt,
          date1,
          date2,
          country,
          state,
          persons,
      });
      res.send({ status: "ok" });
  } catch (error) {
      res.send({ status: "error" });
  }
});

Book2b.post("/booking1", async (req, res) => {
  const { phone } = req.body;

  try {
    // Find the user in the database based on the provided email
    const user = await User.findOne({ phone });

    // Check if the user exists and verify the password
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    // Send the token as a response
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


Book2b.post("/booked", async (req, res) => {
  const { token } = req.body;

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const userId = decodedToken.userId;

    User.findById(userId).then((data) => {
      if (data) {
        res.send({ status: "ok", data: data });
      } else {
        res.status(404).send({ status: "error", message: "User not found" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: "error", message: "Something went wrong" });
  }
});



const port = process.env.PORT || 4000;
Book2b.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
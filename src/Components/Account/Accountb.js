const express = require("express");
const Accountb = express();
Accountb.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
Accountb.use(cors({origin: ["http://localhost:3000"]}));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

// add your JWT_SECRET
// add your mongoUrl

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log("Connect to database");}).catch((e) => console.log("Error", e));

require("./UserDetails")
const User = mongoose.model("UserInfo");

Accountb.post("/signup", async (req, res) => {
  const { name, address, phone, email, password, cpassword } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
      const oldUser = await User.findOne({email});
      if (oldUser) {
        return res.send({error: "User Already Exists"});
      }
      await User.create({
          name,
          address,
          phone,
          email,
          password: encryptedPassword,
          cpassword: encryptedPassword,
      });
      res.send({ status: "ok" });
  } catch (error) {
      res.send({ status: "error" });
  }
});

Accountb.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database based on the provided email
    const user = await User.findOne({ email });

    // Check if the user exists and verify the password
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
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


Accountb.post("/userdata", async (req, res) => {
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



const port = process.env.PORT || 3001;
Accountb.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

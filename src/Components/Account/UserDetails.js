const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        phone: Number,
        email: {type: String, unique: true},
        password: String,
        cpassword: String,
    },

    {
        collection: "UserInfo"
    }
);

const UserInfo = mongoose.model("UserInfo", UserDetailsSchema);

module.exports = UserInfo;
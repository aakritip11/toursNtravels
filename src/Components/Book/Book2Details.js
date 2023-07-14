const mongoose = require("mongoose");

const Book2DetailsSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        phone: Number,
        email: String,
        persons: Number,
        cityf: String,
        cityt: String,
        state: String,
        country: String,
        date1: Date,
        date2: Date,
    },

    {
        collection: "BookingUserDetails"
    }
);

const BookingUserDetails = mongoose.model("BookingUserDetails", Book2DetailsSchema);

module.exports = BookingUserDetails;
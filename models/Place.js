const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
    {},
    {
        strict: false
    }
);

module.exports = mongoose.model("Place", placeSchema, "places");
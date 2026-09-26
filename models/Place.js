const mongoose = require("mongoose");
const { loclocDB } = require("../config/db");

const placeSchema = new mongoose.Schema(
    {},
    {
        strict: false
    }
);

module.exports = loclocDB.model("Place", placeSchema, "places");
const mongoose = require("mongoose");
const { yangon_travelDB } = require("../config/db");

const landmarks = new mongoose.Schema(
    {},
    {
        strict: false
    }
);

module.exports = yangon_travelDB.model("Landmarks", landmarks, "landmarks");
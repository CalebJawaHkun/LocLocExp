const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

const loclocDB = mongoose.connection.useDb('locloc')
const yangon_travelDB = mongoose.connection.useDb('yangon_travel')

module.exports = {
    connectDB, loclocDB, yangon_travelDB
};
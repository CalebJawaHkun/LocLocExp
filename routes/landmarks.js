const express = require("express");
const Landmarks = require("../models/Landmarks");

const router = express.Router();


// GET /locloc/landmarks size=?
router.get("/", async (req, res) => {
    try {
        const { size } = req.query;

        let query = Landmarks.find();

        if (size) {
            query = query.limit(Number(size));
        }

        const landmarks = await query;

        res.status(200).json({
            success: true,
            data: landmarks
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to retrieve landmarks"
        });
    }
});

module.exports = router;

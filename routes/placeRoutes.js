const express = require("express");
const Place = require("../models/Place");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { size } = req.query;

        let query = Place.find();

        if (size) {
            query = query.limit(Number(size));
        }

        const places = await query;

        res.status(200).json({
            success: true,
            data: places
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to retrieve places"
        });
    }
});

module.exports = router;
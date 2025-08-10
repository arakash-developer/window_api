const Width = require("../models/Width");

// Controller for width operations
const widthController = {
  // Create a new width record
  createWidth: async (req, res) => {
    try {
      const { width } = req.body;

      // Validate input
      if (!width || isNaN(width)) {
        return res.status(400).json({ error: "Width must be a valid number" });
      }

      // Create new width record
      const newWidth = new Width({
        width: Number(width),
      });

      // Save to database
      const savedWidth = await newWidth.save();

      res.status(201).json(savedWidth);
    } catch (error) {
      console.error("Error creating width:", error);
      res.status(500).json({ error: "Server error" });
    }
  },

  // Get only the latest width record
  getAllWidths: async (req, res) => {
    try {
      // Find only the most recent width record
      const latestWidth = await Width.findOne().sort({ createdAt: -1 });

      // If no record found, return empty response
      if (!latestWidth) {
        return res.status(200).json(null);
      }

      // Return only the single latest record
      res.status(200).json(latestWidth);
    } catch (error) {
      console.error("Error fetching width:", error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = widthController;

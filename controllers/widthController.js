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

  // Get all width records
  getAllWidths: async (req, res) => {
    try {
      const widths = await Width.find().sort({ createdAt: -1 });
      res.status(200).json(widths);
    } catch (error) {
      console.error("Error fetching widths:", error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = widthController;

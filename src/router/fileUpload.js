const express = require("express");
const router = express.Router();
const upload = require("../helper/multer");
const cloudinary = require("cloudinary").v2;

router.get("/test", (req, res) => {
  res.status(200).json({ message: "Welcome API" });
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRATE,
});

router.post("/upload", upload.single("image"), (req, res) => {
  // Check if file exists
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  // Upload image to Cloudinary
  cloudinary.uploader.upload(
    req.file.path,
    { folder: "uploads" }, // Optional: specify a folder in Cloudinary to store the image
    (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Image upload failed" });
      }
      // Image uploaded successfully
      res.status(200).json({
        message: "Image Upload success",
        url: result.secure_url,
        public_id: result.public_id,
      });
    }
  );
});

module.exports = router;

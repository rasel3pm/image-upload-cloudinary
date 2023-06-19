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

router.post("/image", upload.single("file"), (req, res) => {
  try {
    const image = req.file;
    if (image) {
      // Upload the image to Cloudinary
      cloudinary.uploader.upload(image.path, (err, result) => {
        if (err) {
          return res.json(err);
        } else {
          res.status(200).json({
            url: result.url,
            public_id: result.public_id,
          });
        }
      });
    }
    res.json({ message: "file upload success" });
  } catch (error) {
    res.json({ message: "file upload faild" });
  }
});
module.exports = router;

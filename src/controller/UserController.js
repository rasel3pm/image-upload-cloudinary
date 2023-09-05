const cloudinary = require("../helper/cloudinary");
const User = require("../model/UserRegisterModel");
exports.UserRegister = async (req, res) => {
  try {
    const { name } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    let imageUpload = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads",
    });

    let data = await new User({
      name,
      image: {
        publicID: imageUpload.public_id,
        url: imageUpload.secure_url,
      },
    });
    await data.save();
    res.status(200).json({ status: "success", data });
  } catch (error) {
    res.status(200).json({ status: "fail", error });
  }
};

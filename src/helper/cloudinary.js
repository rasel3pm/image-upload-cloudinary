const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRATE,
});

cloudinary.uploader.upload("image", (err, result) => {
  if (err) {
    res.send(err);
  } else {
    res.json({
      url: result.url,
      public_id: result.public_id,
    });
  }
});

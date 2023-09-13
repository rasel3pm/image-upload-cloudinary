const { UserRegister, getUserInfo } = require("../controller/UserController");
const router = require("express").Router();
const upload = require("../helper/multer");

router.post("/register", upload.single("image"), UserRegister);
router.get("/get-user", getUserInfo);
router.get("/health", (req, res) => {
  res.status(200).json({ message: "success" });
});

module.exports = router;

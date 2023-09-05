const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Product Name"],
    trim: true,
  },
  image: [
    {
      publicID: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

const User = mongoose.model("users", DataSchema);

module.exports = User;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = Schema(
  {
    hash: {
      type: String,
      require: true
    },
    salt: {
      type: String,
      require: true
    },
    username: {
      type: String,
      require: true
    },
    role: {
      type: String,
      enum: ["ADMIN", "VISITOR", "GUIDE"],
      require: true
    },
  },
  { timestamps: true }
);

const User_Model = mongoose.model("User", UserSchema);

module.exports = User_Model;

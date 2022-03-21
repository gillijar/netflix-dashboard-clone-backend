const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  holderName: {
    type: String,
    required: [true, "A user must have a holder name"],
    maxlength: [16, "Holder name must be 16 or less characters"],
  },
  accountOwner: {
    type: mongoose.Schema.ObjectId,
    ref: "accountOwner",
  },
  avatar: {
    type: String,
    default: "avatar-1",
  },
  list: [Object],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;

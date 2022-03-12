const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    localId: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

AccountSchema.virtual("users", {
  ref: "user",
  foreignField: "accountOwner",
  localField: "_id",
});

const Account = mongoose.model("account", AccountSchema);

module.exports = Account;

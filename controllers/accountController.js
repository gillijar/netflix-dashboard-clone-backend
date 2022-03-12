const Account = require("../models/accountModel");

exports.getAccount = async (req, res) => {
  try {
    const account = await Account.findOne({ localId: req.params.id }).populate(
      "users"
    );
    res.status(200).json({
      status: "success",
      data: {
        account,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        account: newAccount,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

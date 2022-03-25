const User = require("../models/userModel");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    let user;

    if (!req.body.list && !req.body.listId) {
      user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    }

    if (req.body.list && !req.body.listId) {
      user = await User.findByIdAndUpdate(
        req.params.id,
        { $push: { list: { $each: [req.body.list], $position: 0 } } },
        { new: true, runValidators: true }
      );
    }

    if (!req.body.list && req.body.listId) {
      user = await User.findByIdAndUpdate(
        req.params.id,
        { $pull: { list: { id: req.body.listId } } },
        { new: true, runValidators: true }
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

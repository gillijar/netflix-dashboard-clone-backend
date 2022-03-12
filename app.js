const express = require("express");
const cors = require("cors");
const accountRouter = require("./routes/accountRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;

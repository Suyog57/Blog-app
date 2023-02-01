const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://Suyog57:CB964CcOp5KgZLFh@cluster0.uootwic.mongodb.net/Blog-app?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(err);
  });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("../routes/userRoutes");
const employeeRoute = require("../routes/authRoutes");
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRoute);
app.use("/auth", employeeRoute);

app.get("/", (req, res) => {
  res.send("Har Har Mahadev");
});

const MongoDb = () => {
  try {
    mongoose.connect(process.env.MONGODB_LINK)
    console.log("mongo connected");
  } catch (error) {
    console.log(error);
  }
}

MongoDb()

const PORT = process.env.PORT

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})
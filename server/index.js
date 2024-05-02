import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./src/routes/auth_route.js";

const app = express();

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_STRING)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err).toString();
  });


app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});


app.use("/api/auth", authRoutes);



app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500
  const message=err.message || "Internal server error"
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})
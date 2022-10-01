import express from "express";
import dotenv from "dotenv";

// Load Envi vars
dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.Node_ENV} mode in port ${PORT}`)
);

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config/config.js";
import SongRoutes from './routes/SongRoutes.js';

const app = express();

app.use(express.json());

// CORS middleware configuration
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["content-type"],
  })
);

// Connect to MongoDB
mongoose
  .connect(config.mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const PORT = config.port;
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Basic route
app.get("/", (req, res) => {
  res.status(201).json({ message: "Server is up and running" });
});

// Use SongRoutes for /songs endpoints
app.use('/songs', SongRoutes);

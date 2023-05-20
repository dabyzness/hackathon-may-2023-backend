import "dotenv/config.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
import formData from "express-form-data";

// Routers
import { router as authRouter } from "./routes/auth.js";
import { router as profileRouter } from "./routes/profile.js";
import { router as contactRouter } from "./routes/contact.js";
import { router as healthRouter } from "./routes/health.js";

import "./config/database.js";

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors());
app.options("/", cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(formData.parse());

app.use("/api", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/contact", contactRouter);
app.use("/api/health", healthRouter);

app.use(function (req, res, next) {
  res.status(404).json({ err: "Not found" });
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message });
});

export { app };

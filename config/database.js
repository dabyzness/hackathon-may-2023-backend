import mongoose from "mongoose";

const db = mongoose.connection;

const dbURL = process.env.DATABASE_URL;

mongoose.connect(dbURL);

db.on("connected", function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

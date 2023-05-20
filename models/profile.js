import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: [
      "vendor",
      "samaritan",
      "restaurant",
      "clinic",
      "shelter",
      "government",
      "homeless",
    ],
  },
  phone: {
    type: String,
  },
  age: { type: Number },
  bio: { type: String },
  children: { type: Number },
  pets: { type: Number },
  image: {
    type: String,
  },
  lastMeal: { type: Date },
  location: {
    street1: { type: String },
    street2: { type: String },
  },
  venmo: { type: String },
  health: [{ type: mongoose.Schema.Types.ObjectId, ref: "Health" }],
  clothing: [{ type: mongoose.Schema.Types.ObjectId, ref: "Clothing" }],
  food: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;

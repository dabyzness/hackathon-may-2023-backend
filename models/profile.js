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
  health: [{ type: Schema.Types.ObjectId, ref: "Health" }],
  clothing: [{ type: Schema.Types.ObjectId, ref: "Clothing" }],
  food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  venmo: { type: String },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;

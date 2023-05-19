import mongoose from "mongoose";

const clothingSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
    enum: ["new", "used", "damaged", "stolen"],
    default: "new",
  },
});

const clothingInventorySchema = new mongoose.Schema({
  hat: [clothingSchema],
  shirt: [clothingSchema],
  jacket: [clothingSchema],
  pants: [clothingSchema],
  socks: [clothingSchema],
  shoes: [clothingSchema],
  underwear: [clothingSchema],
});

const foodSchema = new mongoose.Schema({
  group: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
    enum: ["can", "perishable"],
  },
});

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
  clothing: {
    type: clothingInventorySchema,
  },
  food: [foodSchema],
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;

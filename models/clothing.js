import mongoose from "mongoose";

const clothingSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    enum: [
      "hat",
      "shirt",
      "pants",
      "underwear",
      "socks",
      "shoes",
      "jacket",
      "gloves",
    ],
  },
  quality: {
    type: String,
    required: true,
    enum: ["new", "used", "damaged", "unlaundered"],
    default: "new",
  },
  possession: {
    type: String,
    required: true,
    enum: ["own", "trash", "need", "stolen"],
  },
});

const Clothing = mongoose.model("Clothing", clothingSchema);

export default Clothing;

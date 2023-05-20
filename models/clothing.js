import mongoose from "mongoose";

const clothingSchema = new mongoose.Schema({
  name: { type: String, required: true },
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
    enum: ["new", "used", "damaged", "unlaundered", "placeholder"],
  },
  possession: {
    type: String,
    enum: ["own", "trash", "need", "stolen"],
  },
  quantity: {
    type: Number,
  },
});

const Clothing = mongoose.model("Clothing", clothingSchema);

export default Clothing;

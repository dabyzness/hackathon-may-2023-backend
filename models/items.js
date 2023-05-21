import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "hygiene",
      "shelter",
      "cooking",
      "light",
      "power",
      "transport",
      "other",
    ],
  },
  quality: {
    type: String,
    enum: ["new", "used", "damaged", "placeholder"],
  },
  possession: {
    type: String,
    enum: ["own", "trash", "need", "stolen"],
  },
  quantity: {
    type: Number,
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;

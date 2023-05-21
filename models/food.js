import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["can", "perishable", "pantry", "liquid", "pet", "other"],
  },
  quality: {
    type: String,
    required: true,
    enum: ["placeholder", "ready", "cook", "expired", "stolen"],
  },
  quantity: {
    type: Number,
  },
});

const Food = mongoose.model("Food", foodSchema);

export default Food;

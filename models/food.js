import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["can", "perishable", "pantry", "liquid", "other"],
  },
});

const Food = mongoose.model("Food", foodSchema);

export default Food;

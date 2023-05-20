import mongoose from "mongoose";

const healthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "allergy",
      "disease",
      "virus",
      "disorder",
      "addiction",
      "psychological",
      "injury",
    ],
  },
});

const Health = mongoose.model("Health", healthSchema);

export default Health;

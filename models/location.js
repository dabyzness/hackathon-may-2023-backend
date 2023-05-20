import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  profile: { type: Schema.Types.ObjectId, ref: "Profile" },
  comment: { type: String, required: true },
});

const ratingSchema = new mongoose.Schema({
  profile: { type: Schema.Types.ObjectId, ref: "Profile" },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  responses: [responseSchema],
});

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  phone: { type: String },
  image: { type: String },
  website: { type: String },
  category: {
    type: String,
    required: true,
    enum: ["shelter", "clinic", "food", "restaurant", "other", "government"],
  },
  tags: [
    {
      type: String,
      enum: ["wifi", "power", "donation", "shower", "laundry", "pet", "lgbt"],
    },
  ],
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  ratings: [ratingSchema],
});

const Location = mongoose.model("Location", locationSchema);

export default Location;

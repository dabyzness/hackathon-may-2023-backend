import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["person", "location", "hospital"],
  },
  phone: {
    type: String,
    required: true,
  },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zipcode: { type: String },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;

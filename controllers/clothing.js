import Profile from "../models/profile.js";
import Clothing from "../models/clothing.js";

async function getAllClothing(req, res) {
  try {
    const { category } = req.query;

    const clothing = !category
      ? await Clothing.find({ quality: "placeholder" })
      : await Clothing.find({ category, quality: "placeholder" });

    res.status(200).json(clothing);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function createClothing(req, res) {
  try {
    const profileId = req.token.user.profile;

    const clothing = await Clothing.create(req.body);

    if (clothing.quality !== "placeholder") {
      const profile = await Profile.findById(profileId);
      profile.clothing.push(clothing);
      await profile.save();
    }

    res.status(201).json(clothing);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function updateClothing(req, res) {
  try {
    const { clothingId, details } = req.body;

    const clothing = await Clothing.findByIdAndUpdate(clothingId, details);

    res.status(200).json(clothing);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteClothing(req, res) {
  try {
    const profileId = req.token.user.profile;
    const { clothingId } = req.params;

    const clothing = await Clothing.findByIdAndDelete(clothingId);
    const profile = await Profile.findById(profileId);
    profile.clothing.pull(clothingId);
    profile.save();

    res.status(200).json(clothing);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
export { getAllClothing, createClothing, updateClothing, deleteClothing };

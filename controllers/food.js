import Food from "../models/food.js";
import Profile from "../models/profile.js";

async function getAllFood(req, res) {
  try {
    const { category } = req.query;

    const food = !category
      ? await Food.find({ quality: "placeholder" })
      : await Food.find({ category, quality: "placeholder" });

    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function createFood(req, res) {
  try {
    const profileId = req.token.user.profile;

    const food = await Food.create(req.body);

    if (food.quality !== "placeholder") {
      const profile = await Profile.findById(profileId);
      profile.food.push(food);
      await profile.save();
    }

    res.status(201).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function updateFood(req, res) {
  try {
    const { foodId, details } = req.body;

    const food = await Food.findByIdAndUpdate(foodId, details, { new: true });

    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteFood(req, res) {
  try {
    const profileId = req.token.user.profile;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export { getAllFood, createFood, updateFood, deleteFood };

import Profile from "../models/profile.js";
import Item from "../models/items.js";

async function getAllItem(req, res) {
  try {
    const { category } = req.query;

    const item = !category
      ? await Item.find({ quality: "placeholder" })
      : await Item.find({ category, quality: "placeholder" });

    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function createItem(req, res) {
  try {
    const profileId = req.token.user.profile;

    const item = await Item.create(req.body);

    if (item.quality !== "placeholder") {
      const profile = await Profile.findById(profileId);
      profile.items.push(item);
      await profile.save();
    }

    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function updateItem(req, res) {
  try {
    const { itemId, details } = req.body;

    const item = await Item.findByIdAndUpdate(itemId, details, {
      new: true,
    });

    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteItem(req, res) {
  try {
    const profileId = req.token.user.profile;
    const { itemId } = req.params;

    const item = await Item.findByIdAndDelete(itemId);
    const profile = await Profile.findById(profileId);
    profile.items.pull(itemId);
    profile.save();

    res.status(200).json(itemId);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export { getAllItem, createItem, updateItem, deleteItem };

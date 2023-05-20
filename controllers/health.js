import Profile from "../models/profile.js";
import Health from "../models/health.js";

async function getAllHealth(req, res) {
  try {
    const { category } = req.query;

    const health = !category
      ? await Health.find({})
      : await Health.find({ category });

    res.status(200).json(health);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function createHealth(req, res) {
  try {
    const profileId = req.token.user.profile;

    const profile = await Profile.findById(profileId);
    const health = await Health.create(req.body);

    profile.health.push(health);
    profile.save();

    res.status(201).json(health);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteHealth(req, res) {
  try {
    const profileId = req.token.user.profile;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export { getAllHealth, createHealth, deleteHealth };

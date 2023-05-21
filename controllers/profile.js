import Profile from "../models/profile.js";
import Health from "../models/health.js";
import Clothing from "../models/clothing.js";
import Food from "../models/food.js";
import Item from "../models/items.js";
import Contact from "../models/contact.js";

async function getProfile(req, res) {
  try {
    const { profileId } = req.params;

    const profile = await Profile.findById(profileId);

    res.status(200).json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function updateProfile(req, res) {
  try {
    const profileId = req.token.user.profile;
    const { details } = req.body;

    const profile = await Profile.findById(profileId);

    if (!profile) {
      throw new Error("Profile not found");
    }

    const updatedProfile = await Profile.findByIdAndUpdate(profileId, details, {
      new: true,
    });

    if (!updatedProfile) {
      throw new Error("Unable to update Profile");
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export { getProfile, updateProfile };

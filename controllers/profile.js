import Profile from "../models/profile.js";

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

export { getProfile };

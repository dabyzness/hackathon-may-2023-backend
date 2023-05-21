import Profile from "../models/profile.js";
import Location from "../models/location.js";

async function getAllLocation(req, res) {
  try {
    const locations = await Location.find({});

    res.status(200).json(locations);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
async function createLocation(req, res) {
  try {
    const location = await Location.create(req.body);

    res.status(201).json(location);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function updateLocation(req, res) {
  try {
    const profileId = req.token.user.profile;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteLocation(req, res) {
  try {
    const profileId = req.token.user.profile;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export { getAllLocation, createLocation, updateLocation, deleteLocation };

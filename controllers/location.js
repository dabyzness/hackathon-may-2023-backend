import Profile from "../models/profile.js";
import Location from "../models/location.js";

async function getAllLocation(req, res) {
  try {
    const locations = await Location.find({}).populate({
      path: "ratings",
      select: { path: "profile", select: "_id, username" },
    });

    res.status(200).json(locations);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function getLocation(req, res) {
  try {
    const { locationId } = req.params;

    const location = await Location.findById(locationId).populate({
      path: "ratings",
      select: { path: "profile", select: "_id, username" },
    });

    res.status(200).json(location);
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
    const { locationId, field, action, details } = req.body;
    const profileId = req.token.user.profile;

    const location = await Location.findById(locationId);
    const profile = await Profile.findById(profileId);

    if (field === "ratings") {
      if (action === "add") {
        location.ratings.push({ profile, ...details });
      } else if (action === "remove") {
        location.ratings.splice(
          location.ratings.findIndex(
            (rating) => details.ratingId.toString() === rating._id.toString()
          ),
          1
        );
      }
    }

    if (field === "tags") {
      if (action === "add") {
        location.tags.push(...details.tags);
      } else if (action === "remove") {
        location.tags.pull(details.tags);
      }
    }

    if (!field || !action) {
      Object.keys(details).forEach((key) => {
        location[key] = details[key];
      });
    }

    await location.save();

    res.status(200).json(location);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteLocation(req, res) {
  try {
    const { locationId } = req.params;

    const location = await Location.findByIdAndDelete(locationId);

    res.status(200).json(location);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export {
  getAllLocation,
  getLocation,
  createLocation,
  updateLocation,
  deleteLocation,
};

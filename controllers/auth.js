import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import Profile from "../models/profile.js";

async function signup(req, res) {
  try {
    const { user, profile } = req.body;

    if (!user.email || !user.password) {
      throw new Error("MISSING USER INFO");
    }

    const foundUser = await User.findOne({ email: user.email });

    if (foundUser) {
      throw new Error("ACCOUNT ALREADY EXISTS");
    }

    if (!profile.username || !profile.firstName || !profile.role) {
      throw new Error("MISSING PROFILE INFO");
    }

    const foundProfile = await Profile.findOne({ username: profile.username });

    if (foundProfile) {
      throw new Error("Username already exists");
    }

    const newProfile = await Profile.create(profile);
    const newUser = (
      await User.create({ ...user, profile: newProfile })
    ).depopulate("profile");
    const token = createJWT(newUser);

    res.status(201).json({ token, profile: newProfile, user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Email not found");
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      throw new Error("Password is incorrect");
    }

    const profile = await Profile.findById(user.profile);

    const token = createJWT(user);

    res.status(200).json({ token, user, profile });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

export { signup, login };

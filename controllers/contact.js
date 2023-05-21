import Contact from "../models/contact.js";
import Profile from "../models/profile.js";

async function createContact(req, res) {
  try {
    const profileId = req.token.user.profile;

    const profile = await Profile.findById(profileId);

    if (!profile) {
      throw new Error("Unable to find profile");
    }

    const contact = await Contact.create(req.body);

    if (!contact) {
      return new Error("Unable to create contact");
    }

    profile.contact = contact;
    await profile.save();

    res.status(201).json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function updateContact(req, res) {
  try {
    const { contactId, details } = req.body;

    const contact = await Contact.findByIdAndUpdate(contactId, details, {
      new: true,
    });

    res.status(200).json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteContact(req, res) {
  try {
    const profileId = req.token.user.profile;
    const { contactId } = req.params;

    const contact = await Contact.findByIdAndDelete(contactId);

    await Profile.findByIdAndUpdate(profileId, {
      $unset: { contact: "" },
    });

    res.status(200).json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export { createContact, updateContact, deleteContact };

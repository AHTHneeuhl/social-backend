import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 56,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 56,
    },
    email: {
      type: String,
      required: true,
      max: 56,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    profileViews: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;

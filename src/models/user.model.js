import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    userEmail: {
      type: String,
      required: true,
      trim: true,
    },
    userNumber: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("Users", UserSchema);

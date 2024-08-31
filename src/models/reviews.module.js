import { model, Schema } from "mongoose";

const ReviewsSchema = new Schema(
  {
    reviewerImage: {
      type: String,
      required: true,
    },
    reviewerName: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Reviews = model("Reviews", ReviewsSchema);

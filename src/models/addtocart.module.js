import { model, Schema } from "mongoose";

const AddToCartSchema = new Schema({
  productImage: {
    type: String,
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
  },
  productQty: {
    type: Number,
    required: true,
    default: 1,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

export const AddToCarts = model("AddToCarts", AddToCartSchema);

import { model, Schema } from "mongoose";

const ProductsSchema = new Schema(
  {
    productImage: {
      type: String,
      required: true,
    },
    productTitle: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productQty: {
      type: Number,
      required: true,
      default: 1,
    },
    productCategory: {
      type: String,
      required: true,
      enum: ["Pizza", "Burger", "Pasta", "Chips"],
      index: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model("Products", ProductsSchema);

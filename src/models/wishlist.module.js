import { model, Schema } from "mongoose";

const WishListSchema = new Schema({
  products: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
});

export const WishList = model("WishLists", WishListSchema);

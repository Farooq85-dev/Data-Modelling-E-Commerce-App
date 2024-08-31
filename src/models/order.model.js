import { model, Schema } from "mongoose";

const PlaceOrderSchema = new Schema(
  {
    cityName: {
      type: String,
      required: true,
    },
    streetName: {
      type: String,
    },
    stateName: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    timestamps: true,
  }
);

export const PlacedOrder = model("PlaceOrders", PlaceOrderSchema);

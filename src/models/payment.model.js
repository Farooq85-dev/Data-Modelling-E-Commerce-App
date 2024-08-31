import { model, Schema } from "mongoose";

const PaymentSchema = new Schema(
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

export const Payment = model("Payments", PaymentSchema);

import { IOrder } from "./../types/order"
import { model, Schema } from "mongoose"

const orderSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    // TODO: update for order
    description: {
      type: String,
      required: true,
    },
    // TODO: update for order
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<IOrder>("Order", orderSchema)

import { IOrder } from "./../types/order";
import { model, Schema } from "mongoose";

const orderSchema: Schema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },

        // TODO: update for order
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    },
    { timestamps: true }
);

export default model<IOrder>("Order", orderSchema);

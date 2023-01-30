import { IOrder } from "../types/orderType";
import { Document, model, Schema } from "mongoose";

const orderSchema: Schema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },

        // TODO: update for order
        products: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },

        status: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);

export default model<IOrder>("Order", orderSchema);

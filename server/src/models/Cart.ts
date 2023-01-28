import { ICart } from "./../types/cart";
import { model, Schema } from "mongoose";
import Product from "./Product";

const cartSchema: Schema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },

        order: {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },

        quantity: {
            type: Number,
            min: 0,
        },
    },
    { timestamps: true }
);

export default model<ICart>("Cart", cartSchema);

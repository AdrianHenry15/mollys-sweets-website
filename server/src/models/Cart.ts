import { ICart } from "../types/cartType";
import { model, Schema } from "mongoose";

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

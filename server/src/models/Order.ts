import { IOrder } from "../types/orderType";
import { model, Schema } from "mongoose";

const orderSchema: Schema = new Schema(
    {
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],

        status: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);

export default model<IOrder>("Order", orderSchema);

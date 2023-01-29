import { model, Schema } from "mongoose";
import { ICookie } from "../types/cookieType";

const cookieSchema: Schema = new Schema({
    cookieBase: {
        regular: {
            type: Boolean,
            required: true,
            price: Number,
            trim: true,
        },
        mini: {
            type: Boolean,
            required: true,
            price: Number,
            trim: true,
        },
        quantity: {
            type: String,
            required: true,
            price: Number,
            trim: true,
        },
        totalPrice: {
            type: Number,
            required: true,
            trim: true,
        },
    },
    cookieFlavor: {
        flavor: {
            type: String,
            required: true,
            price: Number,
            trim: true,
        },
        frosting: {
            type: Boolean,
            required: true,
            trim: true,
        },
        frostingType: {
            type: String,
            required: false,
            price: Number,
            trim: true,
        },
        totalPrice: {
            type: Number,
            required: true,
            trim: true,
        },
    },
});

export default model<ICookie>("Cookie", cookieSchema);

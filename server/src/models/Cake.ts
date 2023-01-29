import { model, Schema } from "mongoose";
import { ICake } from "../types/cakeType";

const cakeSchema: Schema = new Schema({
    cakeBase: {
        singleTier: {
            type: Boolean,
            price: Number,
            required: true,
            trim: true,
        },
        multipleTier: {
            type: Boolean,
            price: Number,
            required: true,
            trim: true,
        },
        roundCake: {
            type: Boolean,
            required: true,
            trim: true,
        },
        sheetCake: {
            type: Boolean,
            price: Number,
            required: true,
            trim: true,
        },
        cakeSize: {
            type: String,
            feeds: String,
            price: Number,
            required: true,
            trim: true,
        },
        totalPrice: {
            type: Number,
            required: true,
            trim: true,
        },
    },
    cakeFlavor: {
        flavor: {
            type: String,
            required: true,
            price: Number,
            trim: true,
        },
        filling: {
            type: String,
            required: true,
            price: Number,
            trim: true,
        },
        frosting: {
            type: String,
            required: true,
            price: Number,
            trim: true,
        },
        fruit: {
            type: Boolean,
            required: true,
            trim: true,
        },
        fruitType: {
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

export default model<ICake>("Cake", cakeSchema);

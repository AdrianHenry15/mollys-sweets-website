import { model, Schema } from "mongoose";
import { ICupcake } from "../types/cupcakeType";

const cupcakeSchema: Schema = new Schema({
    cupcakeBase: {
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
    cupcakeFlavor: {
        flavor: {
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
        totalPrice: {
            type: Number,
            required: true,
            trim: true,
        },
    },
});

export default model<ICupcake>("Cupcake", cupcakeSchema);

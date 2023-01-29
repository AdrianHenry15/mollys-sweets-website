import { model, Schema } from "mongoose";
import { IProduct } from "../types/productType";

const productSchema: Schema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    dateOfEvent: {
        type: Date,
        required: true,
        trim: true,
    },
    pickupOrDelivery: {
        type: Boolean,
        required: true,
        trim: true,
    },
    arrivalTime: {
        type: Date,
        required: true,
        trim: true,
    },
    occasion: {
        type: String,
        required: true,
        trim: true,
    },
    recipient: {
        type: String,
        required: true,
        trim: true,
    },
    preferredColors: {
        type: String,
        required: true,
        trim: true,
    },
    additionalDetails: {
        type: String,
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
    linkExample: {
        type: String,
        required: false,
        trim: true,
    },
    imageURL: {
        type: String,
        required: false,
        trim: true,
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
});

export default model<IProduct>("Product", productSchema);

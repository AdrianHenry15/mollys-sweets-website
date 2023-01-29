"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
        trim: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.default = (0, mongoose_1.model)("Product", productSchema);

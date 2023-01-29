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
    cakeBase: {
        required: false,
        singleTier: {
            type: String,
            price: Number,
            required: true,
            trim: true,
        },
        multipleTier: {
            type: String,
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
    cupcakeBase: {
        required: false,
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
    cookieBase: {
        required: false,
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
    cakeFlavor: {
        required: false,
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
    cupcakeFlavor: {
        required: false,
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
    cookieFlavor: {
        required: false,
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

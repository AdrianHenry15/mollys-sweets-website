import { model, Schema } from "mongoose";
import { ICookieFrosting } from "../../../types/CookieTypes/CookieFlavorTypes/cookieFrostingType";

const cookieFrostingSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
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
});

export default model<ICookieFrosting>("CookieFrosting", cookieFrostingSchema);

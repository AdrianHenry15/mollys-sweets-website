import { model, Schema } from "mongoose";
import { ICookieFrosting } from "../../../types/CookieTypes/CookieFlavorTypes/cookieFrostingType";

const cookieFrostingSchema: Schema = new Schema({
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
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICookieFrosting>("CookieFrosting", cookieFrostingSchema);

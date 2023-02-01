import { model, Schema } from "mongoose";
import { ICookieBase } from "../../../types/CookieTypes/CookieBaseTypes/cookieBaseType";

const cookieBaseSchema: Schema = new Schema({
    size: {
        type: String,
        require: true,
        trim: true,
    },
    quantity: {
        type: String,
        require: true,
        trim: true,
    },
    feeds: {
        type: String,
        require: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICookieBase>("CookieBase", cookieBaseSchema);

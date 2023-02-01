import { model, Schema } from "mongoose";
import { ICookieFlavor } from "../../../types/CookieTypes/CookieFlavorTypes/cookieFlavorType";

const cookieFlavorSchema: Schema = new Schema({
    flavor: {
        type: String,
        required: true,
        price: Number,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICookieFlavor>("CookieFlavor", cookieFlavorSchema);

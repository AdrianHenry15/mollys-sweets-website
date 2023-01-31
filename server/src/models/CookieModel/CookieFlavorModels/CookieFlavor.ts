import { model, Schema } from "mongoose";
import { ICookieFlavor } from "../../../types/CookieTypes/CookieFlavorTypes/cookieFlavorType";

const cookieFlavorSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    flavor: {
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
});

export default model<ICookieFlavor>("CookieFlavor", cookieFlavorSchema);

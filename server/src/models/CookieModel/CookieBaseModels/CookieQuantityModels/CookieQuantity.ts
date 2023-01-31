import { model, Schema } from "mongoose";
import { ICookieQuantity } from "../../../../types/CookieTypes/CookieBaseTypes/CookieQuantity/cookieQuantityType";

const cookieQuantitySchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    quantity: {
        type: String,
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICookieQuantity>("CookieQuantity", cookieQuantitySchema);

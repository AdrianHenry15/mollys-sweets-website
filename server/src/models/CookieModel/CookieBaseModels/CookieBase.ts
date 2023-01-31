import { model, Schema } from "mongoose";
import { ICookieBase } from "../../../types/CookieTypes/CookieBaseTypes/cookieBaseType";

const cookieBaseSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    size: {
        type: Schema.Types.ObjectId,
        ref: "CookieSize",
        require: true,
    },
    quantity: {
        type: Schema.Types.ObjectId,
        ref: "CookieQuantity",
        require: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICookieBase>("CookieBase", cookieBaseSchema);

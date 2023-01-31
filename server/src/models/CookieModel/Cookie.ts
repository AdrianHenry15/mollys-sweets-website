import { model, Schema } from "mongoose";
import { ICookie } from "../../types/CookieTypes/cookieType";

const cookieSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    cookieBase: {
        type: Schema.Types.ObjectId,
        ref: "CookieBase",
        require: true,
    },
    cookieFlavor: {
        type: Schema.Types.ObjectId,
        ref: "CookieFlavor",
        require: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICookie>("Cookie", cookieSchema);

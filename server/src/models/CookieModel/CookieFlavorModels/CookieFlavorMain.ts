import { model, Schema } from "mongoose";
import { ICookieFlavorMain } from "../../../types/CookieTypes/CookieFlavorTypes/cookieFlavorMainType";

const cookieFlavorMainSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    flavor: {
        type: Schema.Types.ObjectId,
        ref: "CookieFlavor",
        require: true,
    },
    frosting: {
        type: Schema.Types.ObjectId,
        ref: "CookieFrosting",
        require: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICookieFlavorMain>(
    "CookieFlavorMain",
    cookieFlavorMainSchema
);

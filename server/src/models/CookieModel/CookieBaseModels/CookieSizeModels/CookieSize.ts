import { model, Schema } from "mongoose";
import { ICookieSize } from "../../../../types/CookieTypes/CookieBaseTypes/CookieSize/cookieSizeType";

const cookieSizeSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    regular: {
        type: Schema.Types.ObjectId,
        ref: "RegularSize",
        required: true,
        trim: true,
    },
    mini: {
        type: Schema.Types.ObjectId,
        ref: "MiniSize",
        required: true,
        trim: true,
    },

    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICookieSize>("CookieSize", cookieSizeSchema);

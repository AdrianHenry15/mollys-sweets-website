import { model, Schema } from "mongoose";
import { IMiniSize } from "../../../../types/CookieTypes/CookieBaseTypes/CookieSize/miniSize";

const miniSizeSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    isSize: {
        type: Boolean,
        required: true,
        trim: true,
    },
    feeds: {
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

export default model<IMiniSize>("MiniSize", miniSizeSchema);

import { model, Schema } from "mongoose";
import { ISheetCake } from "../../../../types/CakeTypes/CakeBaseTypes/CakeShapeTypes/sheetCakeType";

const sheetCakeSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    isShape: {
        type: Boolean,
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ISheetCake>("sheetCake", sheetCakeSchema);

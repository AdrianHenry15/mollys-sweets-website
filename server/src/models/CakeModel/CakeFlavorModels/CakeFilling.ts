import { model, Schema } from "mongoose";
import { ICakeFilling } from "../../../types/CakeTypes/CakeFlavorTypes/cakeFillingType";

const cakeFillingSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },

    name: {
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

export default model<ICakeFilling>("CakeFilling", cakeFillingSchema);

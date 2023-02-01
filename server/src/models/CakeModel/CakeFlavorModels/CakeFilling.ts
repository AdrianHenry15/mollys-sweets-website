import { model, Schema } from "mongoose";
import { ICakeFilling } from "../../../types/CakeTypes/CakeFlavorTypes/cakeFillingType";

const cakeFillingSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    price: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICakeFilling>("CakeFilling", cakeFillingSchema);

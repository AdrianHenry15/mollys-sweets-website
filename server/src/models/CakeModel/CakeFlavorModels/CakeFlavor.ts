import { model, Schema } from "mongoose";
import { ICakeFlavor } from "../../../types/CakeTypes/CakeFlavorTypes/cakeFlavorType";

const cakeFlavorSchema: Schema = new Schema({
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

export default model<ICakeFlavor>("CakeFlavor", cakeFlavorSchema);

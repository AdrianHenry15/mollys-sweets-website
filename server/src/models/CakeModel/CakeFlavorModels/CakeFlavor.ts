import { model, Schema } from "mongoose";
import { ICakeFlavor } from "../../../types/CakeTypes/CakeFlavorTypes/cakeFlavorType";

const cakeFlavorSchema: Schema = new Schema({
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

export default model<ICakeFlavor>("CakeFlavor", cakeFlavorSchema);

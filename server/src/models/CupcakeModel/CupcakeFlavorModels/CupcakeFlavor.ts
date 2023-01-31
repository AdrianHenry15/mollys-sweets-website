import { model, Schema } from "mongoose";
import { ICupcakeFlavor } from "../../../types/CupcakeTypes/CupcakeFlavorTypes/cupcakeFlavorType";

const cupcakeFlavorSchema: Schema = new Schema({
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

export default model<ICupcakeFlavor>("CupcakeFlavor", cupcakeFlavorSchema);

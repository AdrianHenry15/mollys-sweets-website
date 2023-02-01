import { model, Schema } from "mongoose";
import { ICupcakeFlavor } from "../../../types/CupcakeTypes/CupcakeFlavorTypes/cupcakeFlavorType";

const cupcakeFlavorSchema: Schema = new Schema({
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

export default model<ICupcakeFlavor>("CupcakeFlavor", cupcakeFlavorSchema);

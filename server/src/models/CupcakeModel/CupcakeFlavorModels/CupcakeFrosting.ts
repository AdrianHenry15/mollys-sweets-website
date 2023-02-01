import { model, Schema } from "mongoose";
import { ICupcakeFrosting } from "../../../types/CupcakeTypes/CupcakeFlavorTypes/cupcakeFrostingType";

const cupcakeFrostingSchema: Schema = new Schema({
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

export default model<ICupcakeFrosting>(
    "CupcakeFrosting",
    cupcakeFrostingSchema
);

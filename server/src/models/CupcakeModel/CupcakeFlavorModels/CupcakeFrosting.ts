import { model, Schema } from "mongoose";
import { ICupcakeFrosting } from "../../../types/CupcakeTypes/CupcakeFlavorTypes/cupcakeFrostingType";

const cupcakeFrostingSchema: Schema = new Schema({
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

export default model<ICupcakeFrosting>(
    "CupcakeFrosting",
    cupcakeFrostingSchema
);

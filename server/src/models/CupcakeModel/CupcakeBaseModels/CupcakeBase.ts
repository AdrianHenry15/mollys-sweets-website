import { model, Schema } from "mongoose";
import { ICupcakeBase } from "../../../types/CupcakeTypes/CupcakeBaseTypes/cupcakeBaseType";

const cupcakeBaseSchema: Schema = new Schema({
    size: {
        type: String,
        require: true,
        trim: true,
    },
    quantity: {
        type: String,
        require: true,
        trim: true,
    },
    feeds: {
        type: String,
        require: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICupcakeBase>("CupcakeBase", cupcakeBaseSchema);

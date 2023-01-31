import { model, Schema } from "mongoose";
import { ICupcakeBase } from "../../../types/CupcakeTypes/CupcakeBaseTypes/cupcakeBaseType";

const cupcakeBaseSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    size: {
        type: Schema.Types.ObjectId,
        ref: "CupcakeSize",
        require: true,
    },
    quantity: {
        type: Schema.Types.ObjectId,
        ref: "CupcakeQuantity",
        require: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICupcakeBase>("CupcakeBase", cupcakeBaseSchema);

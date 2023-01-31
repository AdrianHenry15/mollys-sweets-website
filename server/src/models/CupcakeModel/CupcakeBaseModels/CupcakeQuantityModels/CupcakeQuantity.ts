import { model, Schema } from "mongoose";
import { ICupcakeQuantity } from "../../../../types/CupcakeTypes/CupcakeBaseTypes/CupcakeQuantity/cupcakeQuantityType";

const cupcakeQuantitySchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    quantity: {
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

export default model<ICupcakeQuantity>(
    "CupcakeQuantity",
    cupcakeQuantitySchema
);

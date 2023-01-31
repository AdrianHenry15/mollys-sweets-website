import { model, Schema } from "mongoose";
import { ICupcake } from "../../types/CupcakeTypes/cupcakeType";

const cupcakeSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    cupcakeBase: {
        type: Schema.Types.ObjectId,
        ref: "CupcakeBase",
        require: true,
    },
    cupcakeFlavor: {
        type: Schema.Types.ObjectId,
        ref: "CupcakeFlavorMain",
        require: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICupcake>("Cupcake", cupcakeSchema);

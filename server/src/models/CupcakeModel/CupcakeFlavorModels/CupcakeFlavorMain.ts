import { model, Schema } from "mongoose";
import { ICupcakeFlavorMain } from "../../../types/CupcakeTypes/CupcakeFlavorTypes/cupcakeFlavorMainType";

const cupcakeFlavorMainSchema: Schema = new Schema({
    flavor: {
        type: Schema.Types.ObjectId,
        ref: "CupcakeFlavorMain",
        required: true,
    },
    frosting: {
        type: Schema.Types.ObjectId,
        ref: "CupcakeFrosting",
        required: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICupcakeFlavorMain>(
    "CupcakeFlavorMain",
    cupcakeFlavorMainSchema
);

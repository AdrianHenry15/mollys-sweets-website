import { model, Schema } from "mongoose";
import { ICupcake } from "../../types/CupcakeTypes/cupcakeType";

const cupcakeSchema: Schema = new Schema({
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
});

export default model<ICupcake>("Cupcake", cupcakeSchema);

import { model, Schema } from "mongoose";
import { ICake } from "../../types/CakeTypes/cakeType";

const cakeSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    cakeBase: {
        type: Schema.Types.ObjectId,
        ref: "CakeBase",
        require: true,
    },
    cakeFlavor: {
        type: Schema.Types.ObjectId,
        ref: "CakeFlavorMain",
        require: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICake>("Cake", cakeSchema);

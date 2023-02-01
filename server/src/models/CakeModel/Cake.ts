import { model, Schema } from "mongoose";
import { ICake } from "../../types/CakeTypes/cakeType";

const cakeSchema: Schema = new Schema({
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
});

export default model<ICake>("Cake", cakeSchema);

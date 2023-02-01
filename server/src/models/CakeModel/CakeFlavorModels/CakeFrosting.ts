import { model, Schema } from "mongoose";
import { ICakeFrosting } from "../../../types/CakeTypes/CakeFlavorTypes/cakeFrostingType";

const cakeFrostingSchema: Schema = new Schema({
    frosting: {
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

export default model<ICakeFrosting>("CakeFrosting", cakeFrostingSchema);

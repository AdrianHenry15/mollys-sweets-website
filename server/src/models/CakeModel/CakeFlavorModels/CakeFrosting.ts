import { model, Schema } from "mongoose";
import { ICakeFrosting } from "../../../types/CakeTypes/CakeFlavorTypes/cakeFrostingType";

const cakeFrostingSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },

    frosting: {
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

export default model<ICakeFrosting>("CakeFrosting", cakeFrostingSchema);

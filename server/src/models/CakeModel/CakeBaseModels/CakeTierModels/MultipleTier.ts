import { model, Schema } from "mongoose";
import { IMultipleTier } from "../../../../types/CakeTypes/CakeBaseTypes/CakeTierTypes/multipleTierType";

const multipleTierSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    isTier: {
        type: Boolean,
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<IMultipleTier>("MultipleTier", multipleTierSchema);

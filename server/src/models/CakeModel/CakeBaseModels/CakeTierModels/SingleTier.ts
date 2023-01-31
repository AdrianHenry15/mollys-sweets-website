import { model, Schema } from "mongoose";
import { ISingleTier } from "../../../../types/CakeTypes/CakeBaseTypes/CakeTierTypes/singleTierType";

const singleTierSchema: Schema = new Schema({
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

export default model<ISingleTier>("SingleTier", singleTierSchema);

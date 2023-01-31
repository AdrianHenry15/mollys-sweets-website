import { model, Schema } from "mongoose";
import { ICakeTier } from "../../../../types/CakeTypes/CakeBaseTypes/CakeTierTypes/cakeTierType";

const cakeTierSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    singleTier: {
        type: Schema.Types.ObjectId,
        ref: "SingleTier",
        required: true,
        trim: true,
    },
    multipleTier: {
        type: Schema.Types.ObjectId,
        ref: "MultipleCake",
        required: true,
        trim: true,
    },
});

export default model<ICakeTier>("CakeTier", cakeTierSchema);

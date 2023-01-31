import { model, Schema } from "mongoose";
import { ICakeBase } from "../../../types/CakeTypes/CakeBaseTypes/cakeBaseType";

const cakeBaseSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    tier: {
        type: Schema.Types.ObjectId,
        ref: "CakeTier",
        require: true,
    },
    shape: {
        type: Schema.Types.ObjectId,
        ref: "CakeShape",
        require: true,
    },
    size: {
        type: Schema.Types.ObjectId,
        ref: "CakeSize",
        require: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICakeBase>("CakeBase", cakeBaseSchema);

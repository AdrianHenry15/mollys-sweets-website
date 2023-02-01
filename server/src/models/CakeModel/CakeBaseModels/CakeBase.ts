import { model, Schema } from "mongoose";
import { ICakeBase } from "../../../types/CakeTypes/CakeBaseTypes/cakeBaseType";

const cakeBaseSchema: Schema = new Schema({
    shape: {
        type: String,
        require: true,
        trim: true,
    },
    size: {
        type: String,
        require: true,
        trim: true,
    },
    feeds: {
        type: String,
        require: true,
        trim: true,
    },
    tier: {
        type: String,
        require: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICakeBase>("CakeBase", cakeBaseSchema);

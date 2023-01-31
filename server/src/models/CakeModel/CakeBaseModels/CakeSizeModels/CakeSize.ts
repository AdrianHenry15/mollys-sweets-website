import { model, Schema } from "mongoose";
import { ICakeSize } from "../../../../types/CakeTypes/CakeBaseTypes/CakeSizeTypes/cakeSizeType";

const cakeSizeSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    cakeSize: {
        type: String,
        feeds: String,
        price: Number,
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICakeSize>("CakeSize", cakeSizeSchema);

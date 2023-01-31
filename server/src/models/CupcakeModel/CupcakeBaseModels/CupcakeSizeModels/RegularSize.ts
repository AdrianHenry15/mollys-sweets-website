import { model, Schema } from "mongoose";
import { IRegularSize } from "../../../../types/CupcakeTypes/CupcakeBaseTypes/CupcakeSize/regularSize";

const regularSizeSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    isSize: {
        type: Boolean,
        required: true,
        trim: true,
    },
    feeds: {
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

export default model<IRegularSize>("RegularSize", regularSizeSchema);

import { model, Schema } from "mongoose";
import { ICupcakeSize } from "../../../../types/CupcakeTypes/CupcakeBaseTypes/CupcakeSize/cupcakeSizeType";

const cupcakeSizeSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    regular: {
        type: Schema.Types.ObjectId,
        ref: "RegularSize",
        required: true,
        trim: true,
    },
    mini: {
        type: Schema.Types.ObjectId,
        ref: "RegularSize",
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICupcakeSize>("CupcakeSize", cupcakeSizeSchema);

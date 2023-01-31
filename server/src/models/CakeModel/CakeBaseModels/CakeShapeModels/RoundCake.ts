import { model, Schema } from "mongoose";
import { IRoundCake } from "../../../../types/CakeTypes/CakeBaseTypes/CakeShapeTypes/roundCakeType";

const roundCakeSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    isShape: {
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

export default model<IRoundCake>("RoundCake", roundCakeSchema);

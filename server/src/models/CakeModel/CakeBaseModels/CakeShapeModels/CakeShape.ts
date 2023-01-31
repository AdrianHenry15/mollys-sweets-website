import { model, Schema } from "mongoose";
import { ICakeShape } from "../../../../types/CakeTypes/CakeBaseTypes/CakeShapeTypes/cakeShapeType";

const cakeShapeSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    roundCake: {
        type: Schema.Types.ObjectId,
        ref: "RoundCake",
        required: true,
        trim: true,
    },
    sheetCake: {
        type: Schema.Types.ObjectId,
        ref: "SheetCake",
        required: true,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICakeShape>("CakeShape", cakeShapeSchema);

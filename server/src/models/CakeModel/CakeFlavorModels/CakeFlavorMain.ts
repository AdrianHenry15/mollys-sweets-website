import { model, Schema } from "mongoose";
import { ICakeFlavorsMain } from "../../../types/CakeTypes/CakeFlavorTypes/cakeFlavorsMainType";

const cakeFlavorsMainSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    flavor: {
        type: Schema.Types.ObjectId,
        ref: "CakeFlavor",
        required: true,
    },
    filling: {
        type: Schema.Types.ObjectId,
        ref: "CakeFilling",
        required: true,
    },
    frosting: {
        type: Schema.Types.ObjectId,
        ref: "CakeFrosting",
        required: true,
    },
    fruit: {
        type: Schema.Types.ObjectId,
        ref: "CakeFruit",
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICakeFlavorsMain>(
    "CakeFlavorsMain",
    cakeFlavorsMainSchema
);

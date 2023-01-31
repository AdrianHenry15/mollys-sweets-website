import { model, Schema } from "mongoose";
import { ICakeFruit } from "../../../types/CakeTypes/CakeFlavorTypes/cakeFruitType";

const cakeFruitSchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },

    fruit: {
        type: Boolean,
        required: true,
        trim: true,
    },
    fruitType: {
        type: String,
        required: false,
        price: Number,
        trim: true,
    },
    totalPrice: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICakeFruit>("CakeFruit", cakeFruitSchema);

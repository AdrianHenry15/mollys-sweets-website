import { model, Schema } from "mongoose";
import { ICakeFruit } from "../../../types/CakeTypes/CakeFlavorTypes/cakeFruitType";

const cakeFruitSchema: Schema = new Schema({
    fruit: {
        type: Boolean,
        required: true,
        trim: true,
    },
    fruitType: {
        type: String,
        required: false,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
});

export default model<ICakeFruit>("CakeFruit", cakeFruitSchema);

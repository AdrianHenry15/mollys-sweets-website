import { ICategory } from "../types/categoryType";
import { model, Schema } from "mongoose";

const categorySchema: Schema = new Schema({
    id: {
        type: String,
        required: true,
    },

    category: {
        id: Number,
        type: String,
        required: true,
        trim: true,
    },
});

export default model<ICategory>("Category", categorySchema);

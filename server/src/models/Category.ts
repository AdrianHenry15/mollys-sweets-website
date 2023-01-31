import { ICategory } from "../types/categoryType";
import { model, Schema } from "mongoose";

const categorySchema: Schema = new Schema({
    id: {
        type: Number,
        trim: true,
        require: true,
    },
    cake: {
        type: Schema.Types.ObjectId,
        ref: "Cake",
        required: false,
    },
    cupcake: {
        type: Schema.Types.ObjectId,
        ref: "Cupcake",
        required: false,
    },
    cookie: {
        type: Schema.Types.ObjectId,
        ref: "Cookie",
        required: false,
    },
});

export default model<ICategory>("Category", categorySchema);

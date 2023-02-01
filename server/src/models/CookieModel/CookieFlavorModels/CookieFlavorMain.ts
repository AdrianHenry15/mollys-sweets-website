import { model, Schema } from "mongoose";
import { ICookieFlavorMain } from "../../../types/CookieTypes/CookieFlavorTypes/cookieFlavorMainType";

const cookieFlavorMainSchema: Schema = new Schema({
    flavor: {
        type: Schema.Types.ObjectId,
        ref: "CookieFlavor",
        require: true,
    },
    frosting: {
        type: Schema.Types.ObjectId,
        ref: "CookieFrosting",
        require: true,
    },
});

export default model<ICookieFlavorMain>(
    "CookieFlavorMain",
    cookieFlavorMainSchema
);

import { model, Schema } from "mongoose";
import { ICookie } from "../../types/CookieTypes/cookieType";

const cookieSchema: Schema = new Schema({
    cookieBase: {
        type: Schema.Types.ObjectId,
        ref: "CookieBase",
        require: true,
    },
    cookieFlavor: {
        type: Schema.Types.ObjectId,
        ref: "CookieFlavor",
        require: true,
    },
});

export default model<ICookie>("Cookie", cookieSchema);

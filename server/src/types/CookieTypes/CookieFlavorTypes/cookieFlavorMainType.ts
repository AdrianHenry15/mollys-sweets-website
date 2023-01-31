import { Document } from "mongoose";
import { ICookieFlavor } from "./cookieFlavorType";
import { ICookieFrosting } from "./cookieFrostingType";

export interface ICookieFlavorMain extends Document {
    id: number;
    flavor: ICookieFlavor;
    frosting: ICookieFrosting;
    totalPrice: number;
}

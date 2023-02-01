import { Document } from "mongoose";
import { ICookieFlavor } from "./cookieFlavorType";
import { ICookieFrosting } from "./cookieFrostingType";

export interface ICookieFlavorMain extends Document {
    flavor: ICookieFlavor;
    frosting: ICookieFrosting;
}

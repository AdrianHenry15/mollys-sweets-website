import { Document } from "mongoose";
import { ICake } from "./CakeTypes/cakeType";
import { ICookie } from "./CookieTypes/cookieType";
import { ICupcake } from "./CupcakeTypes/cupcakeType";

export interface ICategory extends Document {
    id: number;
    cake: ICake;
    cupcake: ICupcake;
    cookie: ICookie;
}

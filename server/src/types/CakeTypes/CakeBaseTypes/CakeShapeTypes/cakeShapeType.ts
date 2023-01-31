import { Document } from "mongoose";
import { IRoundCake } from "./roundCakeType";
import { ISheetCake } from "./sheetCakeType";

export interface ICakeShape extends Document {
    id: number;
    roundCake: IRoundCake;
    sheetCake: ISheetCake;
}

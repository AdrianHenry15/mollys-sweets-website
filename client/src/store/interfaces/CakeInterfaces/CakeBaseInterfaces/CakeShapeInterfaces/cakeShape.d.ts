import { IRoundCake } from "./roundCake";
import { ISheetCake } from "./sheetCake";

export interface ICakeShape {
    roundCake: IRoundCake;
    sheetCake: ISheetCake;
    totalPrice: number;
}

import { ICakeShape } from "./cakeShape";
import { ICakeSize } from "./cakeSize";
import { ICakeTier } from "./cakeTier";

export interface ICakeBase {
    tier: ICakeTier;
    shape: ICakeShape;
    size: ICakeSize;
    totalPrice: number;
}

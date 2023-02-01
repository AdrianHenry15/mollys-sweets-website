import { ICakeShape } from "./CakeShapeInterfaces/cakeShape";
import { ICakeSize } from "./CakeSizeInterfaces/cakeSize";
import { ICakeTier } from "./CakeTierInterfaces/cakeTier";

export interface ICakeBase {
    tier: ICakeTier;
    shape: ICakeShape;
    size: ICakeSize;
    totalPrice: number;
}

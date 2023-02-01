import { IMultipleTier } from "./multiple";
import { ISingleTier } from "./singleTier";

export interface ICakeTier {
    singlerTier: ISingleTier;
    multipleTier: IMultipleTier;
    totalPrice: number;
}

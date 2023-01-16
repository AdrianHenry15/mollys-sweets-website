import { types } from "mobx-state-tree";

export const CakeTierModel = types.model("CakeTierModel", {
    tier: types.string,
    price: types.number,
});

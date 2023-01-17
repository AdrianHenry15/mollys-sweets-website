import { types } from "mobx-state-tree";

export const CupcakeFrostingModel = types.model("CupcakeForstingModel", {
    id: types.identifier,
    name: types.string,
    price: types.number,
});

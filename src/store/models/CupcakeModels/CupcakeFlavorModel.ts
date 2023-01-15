import { types } from "mobx-state-tree";

export const CupcakeFlavorModel = types.model("CupcakeFlavorModel", {
    id: types.identifier,
    name: types.string,
    price: types.number,
});

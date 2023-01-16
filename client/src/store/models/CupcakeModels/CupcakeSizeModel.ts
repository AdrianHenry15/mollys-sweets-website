import { types } from "mobx-state-tree";

export const CupcakeSizeModel = types.model("CupcakeSizeModel", {
    id: types.identifier,
    name: types.string,
    price: types.number,
});

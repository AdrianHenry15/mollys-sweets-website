import { types } from "mobx-state-tree";

export const CakeSizeModel = types.model("CakeSizeModel", {
    id: types.identifier,
    size: types.string,
    price: types.number,
});

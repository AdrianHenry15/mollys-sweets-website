import { types } from "mobx-state-tree";

export const CookieFlavorModel = types.model("CookieFlavorModel", {
    id: types.identifier,
    name: types.string,
    price: types.number,
});

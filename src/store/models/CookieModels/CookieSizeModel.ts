import { types } from "mobx-state-tree";

export const CookieSizeModel = types.model("CookieSizeModel", {
    id: types.identifier,
    name: types.string,
    price: types.number,
});

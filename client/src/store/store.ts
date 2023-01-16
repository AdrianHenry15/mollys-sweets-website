import { types, getSnapshot } from "mobx-state-tree";
import { makeAutoObservable } from "mobx";
import { Cake } from "./StateStores/CakeStore";
import { Cookie } from "./StateStores/CookieStore";
import { Cupcake } from "./StateStores/CupcakeStore";

export const RootStore = types.model("Store", {
    cakes: types.array(Cake),
    cupcakes: types.array(Cupcake),
    cookies: types.array(Cookie),
});

export const store = RootStore.create({
    cakes: [],
    cupcakes: [],
    cookies: [],
});

console.log(getSnapshot(store));

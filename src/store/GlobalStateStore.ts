import { observable, makeAutoObservable } from "mobx";
import { ICartStore } from "./schemas/ICartStore";
import { IOrderStore } from "./schemas/IOrderStore";
import { IProductStore } from "./schemas/IProductStore";
import { IUserStore } from "./schemas/IUserStore";

export class GlobalStateStore {
    constructor(base?: Partial<GlobalStateStore>) {
        Object.assign(this, base);
        makeAutoObservable(this);
    }

    @observable ProductStore: IProductStore = {
        cake: {
            flavor: "",
            filling: "",
            frosting: "",
            fruit: "",
            size: "",
            serves: "",
            shape: "",
            tier: "",
            sizeCost: 0,
            flavorsCost: 0,
            cakeBaseCost: 0,
        },
        cupcake: {
            flavor: "",
            frosting: "",
            size: "",
            serves: "",
            quantity: "",
            flavorsCost: 0,
            quantityCost: 0,
        },
        cookie: {
            flavor: "",
            frosting: "",
            size: "",
            serves: "",
            quantity: "",
            flavorsCost: 0,
            quantityCost: 0,
        },
        totalCost: 0,
    };
    @observable CartStore: ICartStore = {
        carts: [],
        currentCart: [],
    };
    @observable OrderStore: IOrderStore = {};
    @observable UserStore: IUserStore = {};
}

export const globalStore = new GlobalStateStore();

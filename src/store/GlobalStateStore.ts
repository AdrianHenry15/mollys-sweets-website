import { observable, makeAutoObservable, action } from "mobx";
import { ProductData } from "../data/Products";
import { CakeTiers } from "./constants/Enums";
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
            tierCost: 0,
            sizeCost: 0,
            flavorsCost: 0,
            frostingsCost: 0,
            fillingsCost: 0,
        },
        cupcake: {
            flavor: "",
            frosting: "",
            size: "",
            serves: "",
            quantity: "",
            flavorsCost: 0,
            frostingsCost: 0,
            quantityCost: 0,
        },
        cookie: {
            flavor: "",
            frosting: "",
            size: "",
            serves: "",
            quantity: "",
            flavorsCost: 0,
            frostingsCost: 0,
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

    //actions
    @action
    updateTier = (tier: string) => {
        this.ProductStore.cake.tier = tier;
        if (tier === CakeTiers.SINGLE) {
            this.ProductStore.cake.tierCost =
                ProductData.products.tiers.single[1].price;
            return;
        } else if (tier === CakeTiers.MULTIPLE) {
            this.ProductStore.cake.tierCost =
                ProductData.products.tiers.multiple[1].price;
            return;
        }
    };
    setCakeShape = (shape: string) => {
        this.ProductStore.cake.shape = shape;
    };
    handleCakeSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        this.ProductStore.cake.sizeCost = value;
    };
}

export const globalStore = new GlobalStateStore();

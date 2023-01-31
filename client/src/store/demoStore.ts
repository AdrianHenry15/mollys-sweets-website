import { makeAutoObservable, observable } from "mobx";
import { ICake } from "./interfaces/CakeInterfaces/cakes";

export class demoStateStore {
    constructor() {
        makeAutoObservable(this);
    }

    @observable CakeStore: ICake = {
        cakeBase: {
            tier: {
                singlerTier: false,
                multipleTier: false,
                totalPrice: 0,
            },
            shape: {
                roundCake: false,
                sheetCake: false,
                totalPrice: 0,
            },
            size: {
                cakeSize: "",
                totalPrice: 0,
            },
            totalPrice: 0,
        },
        cakeFlavor: {
            flavor: {
                name: "",
                totalPrice: 0,
            },
            frosting: {
                name: "",
                totalPrice: 0,
            },
            filling: {
                name: "",
                totalPrice: 0,
            },
            fruit: {
                hasFruit: false,
                name: "",
                totalPrice: 0,
            },
            totalPrice: 0,
        },
    };
}

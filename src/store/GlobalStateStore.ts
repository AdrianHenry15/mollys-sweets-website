import { observable, makeAutoObservable, action } from "mobx";
import {
    CakeShapes,
    CakeTiers,
    DeliveryOption,
    Occasion,
    ProductSizes,
    Status,
} from "./constants/Enums";

// stores
import { IProductStore } from "./schemas/IProductStore";
import { ICakeStore } from "./schemas/FeatureStores/ICakeStore";
import { ICupcakeStore } from "./schemas/FeatureStores/ICupcakeStore";
import { ICookieStore } from "./schemas/FeatureStores/ICookieStore";
import { IUserStore } from "./schemas/IUserStore";
import { ICartStore } from "./schemas/ICartStore";
import { IOrderStore } from "./schemas/IOrderStore";
import { ICategory } from "./schemas/ICategoryStore";

export class GlobalStateStore {
    constructor() {
        makeAutoObservable(this);
    }
    // ========================================================= OBSERVABLES =========================================================
    //CAKE

    @observable CakeStore: ICakeStore = {
        base: {
            size: "",
            serves: "",
            shape: CakeShapes.NONE,
            tier: CakeTiers.NONE,
        },
        flavors: {
            flavor: "",
            filling: "",
            frosting: "",
            fruit: "",
        },
        details: {
            arrivalDate: "",
            deliveryOption: DeliveryOption.NONE,
            occasion: Occasion.NONE,
            recipient: "",
            checkedState: false,
            preferredColors: "",
            inscription: "",
            photoExample: "",
            linkExample: "",
            additionalDetails: "",
        },
    };
    //CUPCAKE

    @observable
    CupcakeStore: ICupcakeStore = {
        base: {
            size: ProductSizes.NONE,
            serves: "",
            quantity: "",
        },
        flavors: {
            flavor: "",
            frosting: "",
        },
        details: {
            arrivalDate: "",
            deliveryOption: DeliveryOption.NONE,
            occasion: Occasion.NONE,
            recipient: "",
            checkedState: false,
            preferredColors: "",
            inscription: "",
            photoExample: "",
            linkExample: "",
            additionalDetails: "",
        },
    };
    // COOKIE

    @observable
    CookieStore: ICookieStore = {
        base: {
            size: ProductSizes.NONE,
            serves: "",
            quantity: "",
        },
        flavors: {
            flavor: "",
            frosting: "",
        },
        details: {
            arrivalDate: "",
            deliveryOption: DeliveryOption.NONE,
            occasion: Occasion.NONE,
            recipient: "",
            checkedState: false,
            preferredColors: "",
            inscription: "",
            photoExample: "",
            linkExample: "",
            additionalDetails: "",
        },
    };

    // PRODUCT

    @observable
    ProductStore: IProductStore = {
        category: "",
    };

    @observable CartStore: ICartStore = {
        carts: [],
        currentCart: [],
        cartEmpty: true,
    };
    @observable OrderStore: IOrderStore = {
        validating: false,
        errors: null,
        status: "none",
    };
    @observable UserStore: IUserStore = {
        firstName: "",
        lastName: "",
        email: "",
        validating: false,
        errors: null,
        status: Status.NONE,
    };

    @observable CategoryStore: ICategory = {
        cakeCategory: false,
        cookieCategory: false,
        cupcakeCategory: false,
        category: "",
        getCategory: action((category: string) => {
            this.CategoryStore.category = category;
            console.log(this.CategoryStore.category);
        }),
    };

    // //computeds
    // @computed getTierCost = () => {
    //     const tier = this.CakeStore.cakeBase.tier;
    //     if (tier === CakeTiers.SINGLE) {
    //         this.CakeStore.cakeCosts.tierCost =
    //             ProductData.products.tiers.single[1].price;
    //     } else if (tier === CakeTiers.MULTIPLE) {
    //         this.CakeStore.cakeCosts.tierCost =
    //             ProductData.products.tiers.multiple[1].price;
    //     }
    // };

    // @computed getCakeBaseCost = () => {
    //     return (
    //         this.CakeStore.cakeCosts.sizeCost +
    //         this.CakeStore.cakeCosts.tierCost
    //     );
    // };

    // //values derived from existing state
    // @computed ComputedCakeCosts: ICakeComputeds = {
    //     computedCosts: {
    //         updateCakeBaseCost: () => {
    //             return (
    //                 this.CakeStore.cakeCosts.sizeCost +
    //                 this.CakeStore.cakeCosts.tierCost
    //             );
    //         },
    //         updateCakeFlavorsTotalCost: () => {
    //             return (
    //                 this.CakeStore.cakeCosts.flavorsCost +
    //                 this.CakeStore.cakeCosts.frostingsCost +
    //                 this.CakeStore.cakeCosts.fillingsCost +
    //                 this.CakeStore.cakeCosts.fruitCost
    //             );
    //         },
    //         updateTotalCakeCost: () => {
    //             return (
    //                 this.CakeStore.cakeCosts.flavorsCost +
    //                 this.CakeStore.cakeCosts.frostingsCost +
    //                 this.CakeStore.cakeCosts.fillingsCost +
    //                 this.CakeStore.cakeCosts.fruitCost +
    //                 this.CakeStore.cakeCosts.sizeCost +
    //                 this.CakeStore.cakeCosts.tierCost
    //             );
    //         },
    //     },
    // };

    // @computed ComputedCupcakeCosts: ICupcakeComputeds = {
    //     computedCosts: {
    //         updateCupcakeFlavorTotalCost: () => {
    //             return (
    //                 this.CupcakeStore.cupcakeCosts.flavorsCost +
    //                 this.CupcakeStore.cupcakeCosts.frostingsCost
    //             );
    //         },
    //         updateTotalCupcakeCost: () => {
    //             return (
    //                 this.CupcakeStore.cupcakeCosts.flavorsCost +
    //                 this.CupcakeStore.cupcakeCosts.frostingsCost +
    //                 this.CupcakeStore.cupcakeCosts.quantityCost
    //             );
    //         },
    //     },
    // };

    // @computed ComputedCookieCosts: ICookieComputeds = {
    //     computedCosts: {
    //         updateCookieFlavorTotalCost: () => {
    //             return (
    //                 this.CookieStore.cookieCosts.flavorsCost +
    //                 this.CookieStore.cookieCosts.frostingsCost
    //             );
    //         },
    //         updateTotalCookieCost: () => {
    //             return (
    //                 this.CookieStore.cookieCosts.flavorsCost +
    //                 this.CookieStore.cookieCosts.frostingsCost +
    //                 this.CookieStore.cookieCosts.quantityCost
    //             );
    //         },
    //     },
    // };

    // @computed ProductComputeds: IProductComputeds = {
    //     updateProductTotal: () => {
    //         return (
    //             this.CupcakeStore.cupcakeCosts.flavorsCost +
    //             this.CupcakeStore.cupcakeCosts.frostingsCost +
    //             this.CupcakeStore.cupcakeCosts.quantityCost +
    //             this.CookieStore.cookieCosts.flavorsCost +
    //             this.CookieStore.cookieCosts.frostingsCost +
    //             this.CookieStore.cookieCosts.quantityCost +
    //             this.CakeStore.cakeCosts.flavorsCost +
    //             this.CakeStore.cakeCosts.frostingsCost +
    //             this.CakeStore.cakeCosts.fillingsCost +
    //             this.CakeStore.cakeCosts.fruitCost +
    //             this.CakeStore.cakeCosts.sizeCost +
    //             this.CakeStore.cakeCosts.tierCost
    //         );
    //     },
    // };
}

// HYDRATION CREATE FUNCTION
// const hydrate = create({});

// GLOBAL STORE INSTANCE
export const globalStore = new GlobalStateStore();

// // HYDRATION TO GLOBALSTORE
// hydrate("GlobalStore", globalStore, GlobalStateStore).then(() =>
//     console.log("Application Hydrated")
// );

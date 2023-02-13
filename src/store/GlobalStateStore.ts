import { observable, makeAutoObservable, action, computed } from "mobx";
import { ProductData } from "../data/Data";
import {
    CakeShapes,
    CakeTiers,
    DeliveryOption,
    Occasion,
    ProductSizes,
} from "./constants/Enums";

// stores
import { IProductStore } from "./schemas/IProductStore";
import { ICakeStore } from "./schemas/FeatureStores/ICakeStore";
import { ICupcakeStore } from "./schemas/FeatureStores/ICupcakeStore";
import { ICookieStore } from "./schemas/FeatureStores/ICookieStore";
import { IUserStore } from "./schemas/IUserStore";
import { ICartStore } from "./schemas/ICartStore";
import { IOrderStore } from "./schemas/IOrderStore";

// computeds
import { ICakeComputeds } from "./schemas/ComputedStore/ICakeComputeds";
import { ICupcakeComputeds } from "./schemas/ComputedStore/ICupcakeComputeds";
import { ICookieComputeds } from "./schemas/ComputedStore/ICookieComputeds";
import { IProductComputeds } from "./schemas/ComputedStore/IProductComputeds";
import { ICategory } from "./schemas/ICategoryStore";
import { ICategoryActions } from "./schemas/ActionStore/ICategoryActions";

export class GlobalStateStore {
    constructor() {
        makeAutoObservable(this);
    }
    // ========================================================= OBSERVABLES =========================================================
    //CAKE DETAILS

    // //CUPCAKE DETAILS
    // @observable cupcakeArrivalDate = "";
    // @observable cupcakeOcassionDate = "";
    // @observable cupcakeDeliveryOption = DeliveryOption.NONE;
    // @observable cupcakeOccasion = Occasion.NONE;
    // @observable cupcakeRecipient = "";
    // @observable cupcakeCheckedState = false;
    // @observable cupcakePreferredColors = "";
    // @observable cupcakeInscription = "";
    // @observable cupcakePhotoExample = "";
    // @observable cupcakeLinkExample = "";
    // @observable cupcakeAdditionalDetails = "";
    // //COOKIE DETAILS
    // @observable cookieArrivalDate = "";
    // @observable cookieOcassionDate = "";
    // @observable cookieDeliveryOption = DeliveryOption.NONE;
    // @observable cookieOccasion = Occasion.NONE;
    // @observable cookieRecipient = "";
    // @observable cookieCheckedState = false;
    // @observable cookiePreferredColors = "";
    // @observable cookieInscription = "";
    // @observable cookiePhotoExample = "";
    // @observable cookieLinkExample = "";
    // @observable cookieAdditionalDetails = "";

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
        totalCost: 0,
    };

    @observable CartStore: ICartStore = {
        carts: [],
        currentCart: [],
        cartEmpty: true,
    };
    @observable OrderStore: IOrderStore = {
        orderFilled: false,
        orderInProgress: [false],
    };
    @observable UserStore: IUserStore = {
        firstName: "",
        lastName: "",
        email: "",
        loggedIn: false,
    };

    @observable CategoryStore: ICategory = {
        cakeCategory: false,
        cookieCategory: false,
        cupcakeCategory: false,
        category: "",
    };

    //ACTION
    @action CategoryActions: ICategoryActions = {
        getCategory: (category: string) => {
            this.CategoryStore.category = category;
            console.log(this.CategoryStore.category);
        },
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

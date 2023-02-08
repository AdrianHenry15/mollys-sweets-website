import { observable, makeAutoObservable, action, computed } from "mobx";
import { ProductData } from "../data/Products";
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
import { persist, create } from "mobx-persist";

export class GlobalStateStore {
    constructor() {
        makeAutoObservable(this);
    }
    // ========================================================= OBSERVABLES =========================================================
    //CAKE DETAILS
    @persist("object") @observable cakeArrivalDate = "";
    @persist("object") @observable cakeOcassionDate = "";
    @persist("object") @observable cakeDeliveryOption = DeliveryOption.NONE;
    @persist("object") @observable cakeOccasion = Occasion.NONE;
    @persist("object") @observable cakeRecipient = "";
    @persist("object") @observable cakeCheckedState = false;
    @persist("object") @observable cakePreferredColors = "";
    @persist("object") @observable cakeInscription = "";
    @persist("object") @observable cakePhotoExample = "";
    @persist("object") @observable cakeLinkExample = "";
    @persist("object") @observable cakeAdditionalDetails = "";
    //CUPCAKE DETAILS
    @persist("object") @observable cupcakeArrivalDate = "";
    @persist("object") @observable cupcakeOcassionDate = "";
    @persist("object") @observable cupcakeDeliveryOption = DeliveryOption.NONE;
    @persist("object") @observable cupcakeOccasion = Occasion.NONE;
    @persist("object") @observable cupcakeRecipient = "";
    @persist("object") @observable cupcakeCheckedState = false;
    @persist("object") @observable cupcakePreferredColors = "";
    @persist("object") @observable cupcakeInscription = "";
    @persist("object") @observable cupcakePhotoExample = "";
    @persist("object") @observable cupcakeLinkExample = "";
    @persist("object") @observable cupcakeAdditionalDetails = "";
    //COOKIE DETAILS
    @persist("object") @observable cookieArrivalDate = "";
    @persist("object") @observable cookieOcassionDate = "";
    @persist("object") @observable cookieDeliveryOption = DeliveryOption.NONE;
    @persist("object") @observable cookieOccasion = Occasion.NONE;
    @persist("object") @observable cookieRecipient = "";
    @persist("object") @observable cookieCheckedState = false;
    @persist("object") @observable cookiePreferredColors = "";
    @persist("object") @observable cookieInscription = "";
    @persist("object") @observable cookiePhotoExample = "";
    @persist("object") @observable cookieLinkExample = "";
    @persist("object") @observable cookieAdditionalDetails = "";

    //CAKE
    @persist("object") @observable CakeStore: ICakeStore = {
        cakeBase: {
            size: "",
            serves: "",
            shape: CakeShapes.NONE,
            tier: CakeTiers.NONE,
        },
        cakeFlavors: {
            flavor: "",
            filling: "",
            frosting: "",
            fruit: "",
        },
        cakeCosts: {
            tierCost: 0,
            sizeCost: 0,
            flavorsCost: 0,
            frostingsCost: 0,
            fillingsCost: 0,
            fruitCost: 0,
        },
    };
    //CUPCAKE
    @persist("object")
    @observable
    CupcakeStore: ICupcakeStore = {
        cupcakeCount: {
            size: ProductSizes.NONE,
            serves: "",
            quantity: "",
        },
        cupcakeFlavors: {
            flavor: "",
            frosting: "",
        },
        cupcakeCosts: {
            quantityCost: 0,
            flavorsCost: 0,
            frostingsCost: 0,
        },
    };
    // COOKIE
    @persist("object")
    @observable
    CookieStore: ICookieStore = {
        cookieCount: {
            size: ProductSizes.NONE,
            serves: "",
            quantity: "",
        },
        cookieFlavors: {
            flavor: "",
            frosting: "",
        },
        cookieCosts: {
            quantityCost: 0,
            flavorsCost: 0,
            frostingsCost: 0,
        },
    };

    // PRODUCT
    @persist("object")
    @observable
    ProductStore: IProductStore = {
        category: "",
        totalCost: 0,
    };

    @persist("object") @observable CartStore: ICartStore = {
        carts: [],
        currentCart: [],
        cartEmpty: true,
    };
    @persist("object") @observable OrderStore: IOrderStore = {
        orderFilled: false,
        orderInProgress: [false],
    };
    @persist("object") @observable UserStore: IUserStore = {
        firstName: "",
        lastName: "",
        email: "",
        loggedIn: false,
    };

    @persist("object") @observable CategoryStore: ICategory = {
        category: "",
    };

    //ACTION
    @action CategoryActions: ICategoryActions = {
        getCategory: (category: string) => {
            this.CategoryStore.category = category;
            console.log(this.CategoryStore.category);
        },
    };

    @computed getTierCost = () => {
        const tier = this.CakeStore.cakeBase.tier;
        if (tier === CakeTiers.SINGLE) {
            this.CakeStore.cakeCosts.tierCost =
                ProductData.products.tiers.single[1].price;
        } else if (tier === CakeTiers.MULTIPLE) {
            this.CakeStore.cakeCosts.tierCost =
                ProductData.products.tiers.multiple[1].price;
        }
    };

    @computed getCakeBaseCost = () => {
        return (
            this.CakeStore.cakeCosts.sizeCost +
            this.CakeStore.cakeCosts.tierCost
        );
    };

    //values derived from existing state
    @computed ComputedCakeCosts: ICakeComputeds = {
        computedCosts: {
            updateCakeBaseCost: () => {
                return (
                    this.CakeStore.cakeCosts.sizeCost +
                    this.CakeStore.cakeCosts.tierCost
                );
            },
            updateCakeFlavorsTotalCost: () => {
                return (
                    this.CakeStore.cakeCosts.flavorsCost +
                    this.CakeStore.cakeCosts.frostingsCost +
                    this.CakeStore.cakeCosts.fillingsCost +
                    this.CakeStore.cakeCosts.fruitCost
                );
            },
            updateTotalCakeCost: () => {
                return (
                    this.CakeStore.cakeCosts.flavorsCost +
                    this.CakeStore.cakeCosts.frostingsCost +
                    this.CakeStore.cakeCosts.fillingsCost +
                    this.CakeStore.cakeCosts.fruitCost +
                    this.CakeStore.cakeCosts.sizeCost +
                    this.CakeStore.cakeCosts.tierCost
                );
            },
        },
    };

    @computed ComputedCupcakeCosts: ICupcakeComputeds = {
        computedCosts: {
            updateCupcakeFlavorTotalCost: () => {
                return (
                    this.CupcakeStore.cupcakeCosts.flavorsCost +
                    this.CupcakeStore.cupcakeCosts.frostingsCost
                );
            },
            updateTotalCupcakeCost: () => {
                return (
                    this.CupcakeStore.cupcakeCosts.flavorsCost +
                    this.CupcakeStore.cupcakeCosts.frostingsCost +
                    this.CupcakeStore.cupcakeCosts.quantityCost
                );
            },
        },
    };

    @computed ComputedCookieCosts: ICookieComputeds = {
        computedCosts: {
            updateCookieFlavorTotalCost: () => {
                return (
                    this.CookieStore.cookieCosts.flavorsCost +
                    this.CookieStore.cookieCosts.frostingsCost
                );
            },
            updateTotalCookieCost: () => {
                return (
                    this.CookieStore.cookieCosts.flavorsCost +
                    this.CookieStore.cookieCosts.frostingsCost +
                    this.CookieStore.cookieCosts.quantityCost
                );
            },
        },
    };

    @computed ProductComputeds: IProductComputeds = {
        updateProductTotal: () => {
            return (
                this.CupcakeStore.cupcakeCosts.flavorsCost +
                this.CupcakeStore.cupcakeCosts.frostingsCost +
                this.CupcakeStore.cupcakeCosts.quantityCost +
                this.CookieStore.cookieCosts.flavorsCost +
                this.CookieStore.cookieCosts.frostingsCost +
                this.CookieStore.cookieCosts.quantityCost +
                this.CakeStore.cakeCosts.flavorsCost +
                this.CakeStore.cakeCosts.frostingsCost +
                this.CakeStore.cakeCosts.fillingsCost +
                this.CakeStore.cakeCosts.fruitCost +
                this.CakeStore.cakeCosts.sizeCost +
                this.CakeStore.cakeCosts.tierCost
            );
        },
    };
}

// HYDRATION CREATE FUNCTION
const hydrate = create({});

// GLOBAL STORE INSTANCE
export const globalStore = new GlobalStateStore();

// HYDRATION TO GLOBALSTORE
hydrate("GlobalStore", globalStore).then(() =>
    console.log("Application Hydrated")
);

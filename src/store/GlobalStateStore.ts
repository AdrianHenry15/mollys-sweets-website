import { observable, makeAutoObservable, action, computed } from "mobx";
import { ProductData } from "../data/Products";
import {
    CakeShapes,
    CakeTiers,
    DeliveryOption,
    Occasion,
    ProductSizes,
    Recipient,
} from "./constants/Enums";

// stores
import { IProductStore } from "./schemas/IProductStore";
import { ICakeProduct } from "./schemas/ICakeProduct";
import { ICupcakeProduct } from "./schemas/ICupcakeProduct";
import { ICookieProduct } from "./schemas/ICookieProduct";
import { IUserStore } from "./schemas/IUserStore";
import { ICartStore } from "./schemas/ICartStore";
import { IOrderStore } from "./schemas/IOrderStore";

// action store
import { ICakeActions } from "./schemas/ActionStore/ICakeActions";
import { ICupcakeActions } from "./schemas/ActionStore/ICupcakeActions";

// computeds
import { ICakeComputeds } from "./schemas/ComputedStore/ICakeComputeds";
import { ICookieActions } from "./schemas/ActionStore/ICookieActions";
import { ICupcakeComputeds } from "./schemas/ComputedStore/ICupcakeComputeds";
import { ICookieComputeds } from "./schemas/ComputedStore/ICookieComputeds";
import { IProductComputeds } from "./schemas/ComputedStore/IProductComputeds";
import { IProductActions } from "./schemas/ActionStore/IProductActions";
import { ICategory } from "./schemas/ICategoryStore";
import { ICategoryActions } from "./schemas/ActionStore/ICategoryActions";
import { persist, create } from "mobx-persist";
import { IUserActions } from "./schemas/ActionStore/IUserActions";
import { ICartActions } from "./schemas/ActionStore/ICartActions";

export class GlobalStateStore {
    constructor() {
        makeAutoObservable(this);
    }
    // ========================================================= OBSERVABLES =========================================================
    @persist("object") @observable CakeStore: ICakeProduct = {
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

    @persist("object")
    @observable
    CupcakeStore: ICupcakeProduct = {
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

    @persist("object")
    @observable
    CookieStore: ICookieProduct = {
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

    @persist("object")
    @observable
    ProductStore: IProductStore = {
        category: "",
        totalCost: 0,
        details: {
            arrivalDate: "",
            ocassionDate: "",
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
        email: "/.+@.+..+/",
        loggedIn: false,
    };

    @persist("object") @observable CategoryStore: ICategory = {
        category: "",
    };

    // ========================================================= ACTIONS =========================================================
    @action UserActions: IUserActions = {
        handleFirstNameInput: (e: React.ChangeEvent<HTMLInputElement>) => {
            let select: HTMLInputElement = e.target;
            let value: string = select.value;
            this.UserStore.firstName = value;
        },
        handleLastNameInput: (e: React.ChangeEvent<HTMLInputElement>) => {
            let select: HTMLInputElement = e.target;
            let value: string = select.value;
            this.UserStore.lastName = value;
        },
        handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => {
            let select: HTMLInputElement = e.target;
            let value: string = select.value;
            this.UserStore.email = value;
        },
    };

    @action CakeActions: ICakeActions = {
        cakeBaseActions: {
            updateTier: (tier: string) => {
                this.CakeStore.cakeBase.tier = tier as CakeTiers;
                if (tier === CakeTiers.SINGLE) {
                    this.CakeStore.cakeCosts.tierCost =
                        ProductData.products.tiers.single[1].price;
                    this.CakeStore.cakeBase.tier = CakeTiers.SINGLE;
                    this.CartStore.cartEmpty = false;
                    return;
                } else if (tier === CakeTiers.MULTIPLE) {
                    this.CakeStore.cakeCosts.tierCost =
                        ProductData.products.tiers.multiple[1].price;
                    this.CakeStore.cakeBase.tier = CakeTiers.MULTIPLE;
                    this.CartStore.cartEmpty = false;
                    return;
                }
            },
            updateShape: (shape: string) => {
                this.CakeStore.cakeBase.shape = shape as CakeShapes;
                this.CartStore.cartEmpty = false;
            },
        },
        cakeCostActions: {
            handleCakeSizeCost: (e: React.ChangeEvent<HTMLSelectElement>) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);

                if (this.CakeStore.cakeBase.shape === CakeShapes.ROUND) {
                    //size
                    this.CakeStore.cakeBase.size =
                        ProductData.products.sizes.roundSizes[
                            value
                        ].productSize!;

                    //serves
                    this.CakeStore.cakeBase.serves =
                        ProductData.products.sizes.roundSizes[
                            value
                        ].productServes!;

                    //price
                    this.CakeStore.cakeCosts.sizeCost =
                        ProductData.products.sizes.roundSizes[value].price;

                    // cart state
                    this.CartStore.cartEmpty = false;
                } else if (this.CakeStore.cakeBase.shape === CakeShapes.SHEET) {
                    //tier
                    //size
                    this.CakeStore.cakeBase.size =
                        ProductData.products.sizes.sheetSizes[
                            value
                        ].productSize!;

                    //serves
                    this.CakeStore.cakeBase.serves =
                        ProductData.products.sizes.sheetSizes[
                            value
                        ].productServes!;

                    //price
                    this.CakeStore.cakeCosts.sizeCost =
                        ProductData.products.sizes.sheetSizes[value].price;

                    // cart state
                    this.CartStore.cartEmpty = false;
                }
            },
            handleCakeFlavorCost: (e: React.ChangeEvent<HTMLSelectElement>) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                // flavor name
                this.CakeStore.cakeFlavors.flavor =
                    ProductData.products.flavors[value].productName;
                // price
                this.CakeStore.cakeCosts.flavorsCost =
                    ProductData.products.flavors[value].price;
            },
            handleCakeFrostingCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                // flavor name
                this.CakeStore.cakeFlavors.frosting =
                    ProductData.products.frostings[value].productName;
                // price
                this.CakeStore.cakeCosts.frostingsCost =
                    ProductData.products.frostings[value].price;
            },
            handleCakeFillingCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                // flavor name
                this.CakeStore.cakeFlavors.filling =
                    ProductData.products.fillings[value].productName;
                // price
                this.CakeStore.cakeCosts.fillingsCost =
                    ProductData.products.fillings[value].price;
            },
            handleCakeFruitCost: (e: React.ChangeEvent<HTMLSelectElement>) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                // flavor name
                this.CakeStore.cakeFlavors.fruit =
                    ProductData.products.fruit[value].productName;
                // price
                this.CakeStore.cakeCosts.fruitCost =
                    ProductData.products.fruit[value].price;
            },
        },
    };

    @action CupcakeActions: ICupcakeActions = {
        cupcakeCountActions: {
            handleCupcakeQuantityCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                if (this.CupcakeStore.cupcakeCount.size === ProductSizes.MINI) {
                    //size
                    this.CupcakeStore.cupcakeCount.size =
                        ProductData.products.sizes.cupcake_cookie_sizes.mini[
                            value
                        ].productSize!;

                    //serves
                    this.CupcakeStore.cupcakeCount.serves =
                        ProductData.products.sizes.cupcake_cookie_sizes.mini[
                            value
                        ].productServes;

                    //price
                    this.CupcakeStore.cupcakeCosts.quantityCost =
                        ProductData.products.sizes.cupcake_cookie_sizes.mini[
                            value
                        ].price;

                    // cart state
                    this.CartStore.cartEmpty = false;
                } else if (
                    this.CupcakeStore.cupcakeCount.size === ProductSizes.REGULAR
                ) {
                    //size
                    this.CupcakeStore.cupcakeCount.size =
                        ProductData.products.sizes.cupcake_cookie_sizes.regular[
                            value
                        ].productSize!;

                    //serves
                    this.CupcakeStore.cupcakeCount.serves =
                        ProductData.products.sizes.cupcake_cookie_sizes.regular[
                            value
                        ].productServes;

                    //price
                    this.CupcakeStore.cupcakeCosts.quantityCost =
                        ProductData.products.sizes.cupcake_cookie_sizes.regular[
                            value
                        ].price;

                    // cart state
                    this.CartStore.cartEmpty = false;
                }
            },
            handleCupcakeFlavorCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                // flavor
                this.CupcakeStore.cupcakeFlavors.flavor =
                    ProductData.products.flavors[value].productName;
                // price
                this.CupcakeStore.cupcakeCosts.flavorsCost =
                    ProductData.products.flavors[value].price;
            },
            handleCupcakeFrostingCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                // frosting
                this.CupcakeStore.cupcakeFlavors.frosting =
                    ProductData.products.frostings[value].productName;
                // price
                this.CupcakeStore.cupcakeCosts.frostingsCost =
                    ProductData.products.frostings[value].price;
            },
            setCupcakeSize: (e: React.ChangeEvent<HTMLInputElement>) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.CupcakeStore.cupcakeCount.size = value as ProductSizes;
            },
        },
    };

    @action CookieActions: ICookieActions = {
        cookieCountActions: {
            setCookieQuantity: (e: React.ChangeEvent<HTMLSelectElement>) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                if (this.CookieStore.cookieCount.size === ProductSizes.MINI) {
                    //size
                    this.CookieStore.cookieCount.size =
                        ProductData.products.sizes.cupcake_cookie_sizes.mini[
                            value
                        ].productSize!;

                    //quantity
                    this.CookieStore.cookieCount.quantity =
                        ProductData.products.sizes.cupcake_cookie_sizes.mini[
                            value
                        ].productQuantity;

                    //serves
                    this.CookieStore.cookieCount.serves =
                        ProductData.products.sizes.cupcake_cookie_sizes.mini[
                            value
                        ].productServes;

                    //price
                    this.CookieStore.cookieCosts.quantityCost =
                        ProductData.products.sizes.cupcake_cookie_sizes.mini[
                            value
                        ].price;

                    // cart state
                    this.CartStore.cartEmpty = false;
                } else if (
                    this.CookieStore.cookieCount.size === ProductSizes.REGULAR
                ) {
                    //size
                    this.CookieStore.cookieCount.size =
                        ProductData.products.sizes.cupcake_cookie_sizes.regular[
                            value
                        ].productSize!;

                    //serves
                    this.CookieStore.cookieCount.serves =
                        ProductData.products.sizes.cupcake_cookie_sizes.regular[
                            value
                        ].productServes;

                    //price
                    this.CookieStore.cookieCosts.quantityCost =
                        ProductData.products.sizes.cupcake_cookie_sizes.regular[
                            value
                        ].price;

                    // cart state
                    this.CartStore.cartEmpty = false;
                }
            },
            handleCookieFlavorCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                // flavor
                this.CookieStore.cookieFlavors.flavor =
                    ProductData.products.cookies[value].productName;
                // price
                this.CookieStore.cookieCosts.flavorsCost =
                    ProductData.products.flavors[value].price;

                // //local storage
                // localStorage.setItem(
                //     this.CookieStore.cookieFlavors.flavor,
                //     this.CookieStore.cookieCosts.flavorsCost.toString()
                // );
            },
            handleCookieFrostingCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                // frosting
                this.CookieStore.cookieFlavors.frosting =
                    ProductData.products.frostings[value].productName;
                // price
                this.CookieStore.cookieCosts.frostingsCost =
                    ProductData.products.frostings[value].price;
            },
            setCookieSize: (e: React.ChangeEvent<HTMLInputElement>) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.CookieStore.cookieCount.size = value as ProductSizes;
                console.log(value);
            },
        },
    };

    @action ProductActions: IProductActions = {
        detailsActions: {
            handleArrivalDate: (d: Date) => {
                this.ProductStore.details.arrivalDate = d.toDateString();
            },
            handleOccasionDate: (d: Date) => {
                this.ProductStore.details.ocassionDate = d.toDateString();
            },
            handleOccasion: (e: React.ChangeEvent<HTMLSelectElement>) => {
                let select: HTMLSelectElement = e.target;
                let value: string = select.value;
                this.ProductStore.details.occasion = value as Occasion;
            },
            handleRecipient: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.ProductStore.details.recipient = value;
            },
            handleDeliveryOption: (e: React.ChangeEvent<HTMLInputElement>) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.ProductStore.details.deliveryOption =
                    value as DeliveryOption;
            },
            handlePreferredColors: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.ProductStore.details.preferredColors = value;
            },
            handleInscriptionColors: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.ProductStore.details.inscription = value;
            },
            // TODO: handle photo for order and cart
            handlePhotoExample: (e: React.ChangeEvent<HTMLInputElement>) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.ProductStore.details.photoExample = value;
            },
            // TODO: handle link for order and cart
            handleLinkExample: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.ProductStore.details.linkExample = value;
            },
            handleAdditionalDetails: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.ProductStore.details.additionalDetails = value;
            },
        },
    };

    @action CategoryActions: ICategoryActions = {
        getCategory: (category: string) => {
            this.CategoryStore.category = category;
            console.log(this.CategoryStore.category);
        },
    };
    // ========================================================= COMPUTEDS =========================================================
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

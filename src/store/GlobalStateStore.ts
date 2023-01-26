import { observable, makeAutoObservable, action, computed } from "mobx";
import { ProductData } from "../data/Products";
import { CakeShapes, CakeTiers, ProductSizes } from "./constants/Enums";

// stores
import { IProductStore } from "./schemas/ProductStore/IProductStore";
import { ICakeProduct } from "./schemas/ProductStore/ICakeProduct";
import { ICupcakeProduct } from "./schemas/ProductStore/ICupcakeProduct";
import { ICookieProduct } from "./schemas/ProductStore/ICookieProduct";
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

export class GlobalStateStore {
    constructor() {
        makeAutoObservable(this);
    }
    @observable CakeStore: ICakeProduct = {
        cakeBase: {
            size: "",
            serves: "",
            shape: "",
            tier: "",
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
        cakeDetails: {
            cakeOccasion: "",
            cakeRecipient: "",
            preferredColors: "",
            cakeInscription: "",
            cakePhotoExample: "",
            cakeLinkExample: "",
            additionalDetails: "",
        },
    };

    @action CakeActions: ICakeActions = {
        cakeBaseActions: {
            updateTier: (tier: string) => {
                this.CakeStore.cakeBase.tier = tier;
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
                this.CakeStore.cakeBase.shape = shape;
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
        cakeDetailsActions: {
            handleCakeOccasion: (e: React.ChangeEvent<HTMLSelectElement>) => {
                let select: HTMLSelectElement = e.target;
                let value: string = select.value;
                this.CakeStore.cakeDetails.cakeOccasion = value;
            },
            handleCakeRecipient: (e: React.ChangeEvent<HTMLInputElement>) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.CakeStore.cakeDetails.cakeRecipient = value;
            },
            handleCakeInscription: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.CakeStore.cakeDetails.cakeInscription = value;
            },
            handlePreferredCakeColors: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.CakeStore.cakeDetails.preferredColors = value;
            },
            // TODO: handle photo for order and cart
            handleCakePhotoExample: (
                e: React.ChangeEvent<HTMLInputElement>
            ) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.CakeStore.cakeDetails.cakePhotoExample = value;
            },
            // TODO: handle link for order and cart
            handleCakeLinkExample: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.CakeStore.cakeDetails.cakeLinkExample = value;
            },
            handleCakeAdditionalDetails: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.CakeStore.cakeDetails.additionalDetails = value;
            },
        },
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
    @observable CupcakeStore: ICupcakeProduct = {
        cupcakeCount: {
            size: "",
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
        cupcakeDetails: {
            cupcakeOccasion: "",
            cupcakeRecipient: "",
            preferredCupcakeColors: "",
            cupcakeInscription: "",
            cupcakePhotoExample: "",
            cupcakeLinkExample: "",
            additionalCupcakeDetails: "",
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
                this.CupcakeStore.cupcakeCount.size = value;
            },
        },
        cupcakeDetailsActions: {
            handleCupcakeOccasion: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: string = select.value;
                this.CupcakeStore.cupcakeDetails.cupcakeOccasion = value;
            },
            handleCupcakeRecipient: (
                e: React.ChangeEvent<HTMLInputElement>
            ) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.CupcakeStore.cupcakeDetails.cupcakeRecipient = value;
            },
            handlePreferredCupcakeColors: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.CupcakeStore.cupcakeDetails.preferredCupcakeColors = value;
            },
            // TODO: handle photo for order and cart
            handleCupcakePhotoExample: (
                e: React.ChangeEvent<HTMLInputElement>
            ) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.CupcakeStore.cupcakeDetails.cupcakePhotoExample = value;
            },
            // TODO: handle link for order and cart
            handleCupcakeLinkExample: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.CupcakeStore.cupcakeDetails.cupcakeLinkExample = value;
            },
            handleCupcakeAdditionalDetails: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.CupcakeStore.cupcakeDetails.additionalCupcakeDetails =
                    value;
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
    @observable CookieStore: ICookieProduct = {
        cookieCount: {
            size: "",
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
        cookieDetails: {
            cookieOccasion: "",
            cookieRecipient: "",
            preferredCookieColors: "",
            cookieInscription: "",
            cookiePhotoExample: "",
            cookieLinkExample: "",
            additionalCookieDetails: "",
        },
    };

    @action CookieActions: ICookieActions = {
        cookieCountActions: {
            handleCookieQuantityCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                if (this.CookieStore.cookieCount.size === ProductSizes.MINI) {
                    //size
                    this.CookieStore.cookieCount.size =
                        ProductData.products.sizes.cupcake_cookie_sizes.mini[
                            value
                        ].productSize!;

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
                this.CookieStore.cookieCount.size = value;
                console.log(value);
            },
        },
        cookieDetailsActions: {
            handleCookieOccasion: (e: React.ChangeEvent<HTMLSelectElement>) => {
                let select: HTMLSelectElement = e.target;
                let value: string = select.value;
                this.CookieStore.cookieDetails.cookieOccasion = value;
            },
            handleCookieRecipient: (e: React.ChangeEvent<HTMLInputElement>) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.CookieStore.cookieDetails.cookieRecipient = value;
            },
            handlePreferredCookieColors: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.CookieStore.cookieDetails.preferredCookieColors = value;
            },
            // TODO: handle photo for order and cart
            handleCookiePhotoExample: (
                e: React.ChangeEvent<HTMLInputElement>
            ) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.CookieStore.cookieDetails.cookiePhotoExample = value;
            },
            // TODO: handle link for order and cart
            handleCookieLinkExample: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.CookieStore.cookieDetails.cookieLinkExample = value;
            },
            handleCookieAdditionalDetails: (
                e: React.ChangeEvent<HTMLTextAreaElement>
            ) => {
                let select: HTMLTextAreaElement = e.target;
                let value: string = select.value;
                this.CookieStore.cookieDetails.additionalCookieDetails = value;
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
    @observable ProductStore: IProductStore = {
        totalCost: 0,
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
    @observable CartStore: ICartStore = {
        carts: [],
        currentCart: [],
        cartEmpty: true,
    };
    @observable OrderStore: IOrderStore = {};
    @observable UserStore: IUserStore = {};
}

export const globalStore = new GlobalStateStore();

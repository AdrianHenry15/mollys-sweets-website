import { observable, makeAutoObservable, action, computed } from "mobx";
import { ProductData } from "../data/Products";
import { CakeTiers } from "./constants/Enums";

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
                this.CakeStore.cakeCosts.sizeCost = value;
            },
            handleCakeFlavorCost: (e: React.ChangeEvent<HTMLSelectElement>) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                this.CakeStore.cakeCosts.flavorsCost = value;
            },
            handleCakeFrostingCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                this.CakeStore.cakeCosts.frostingsCost = value;
            },
            handleCakeFillingCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                this.CakeStore.cakeCosts.fillingsCost = value;
            },
            handleCakeFruitCost: (e: React.ChangeEvent<HTMLSelectElement>) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                this.CakeStore.cakeCosts.fruitCost = value;
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
                this.CupcakeStore.cupcakeCosts.quantityCost = value;
            },
            handleCupcakeFlavorCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                this.CupcakeStore.cupcakeCosts.flavorsCost = value;
            },
            handleCupcakeFrostingCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                this.CupcakeStore.cupcakeCosts.frostingsCost = value;
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
                this.CookieStore.cookieCosts.quantityCost = value;
                console.log(value);
            },
            handleCookieFlavorCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                this.CookieStore.cookieCosts.flavorsCost = value;
            },
            handleCookieFrostingCost: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                this.CookieStore.cookieCosts.frostingsCost = value;
            },
            setCookieSize: (e: React.ChangeEvent<HTMLInputElement>) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.CookieStore.cookieCount.size = value;
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
    @observable CartStore: ICartStore = {
        carts: [],
        currentCart: [],
        cartEmpty: true,
    };
    @observable OrderStore: IOrderStore = {};
    @observable UserStore: IUserStore = {};
}

export const globalStore = new GlobalStateStore();

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
import { ICakeActions } from "./schemas/ActionStore/ICakeActions";
import { ICupcakeActions } from "./schemas/ActionStore/ICupcakeActions";

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
                    return;
                } else if (tier === CakeTiers.MULTIPLE) {
                    this.CakeStore.cakeCosts.tierCost =
                        ProductData.products.tiers.multiple[1].price;
                    return;
                }
            },
            updateShape: (shape: string) => {
                this.CakeStore.cakeBase.shape = shape;
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
                this.CakeStore.cakeDetails.cakeInscription = value;
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
                console.log(value);
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
    };

    @action CupcakeActions: ICupcakeActions = {
        cupcakeCountActions: {
            handleCupcakeQuantity: (
                e: React.ChangeEvent<HTMLSelectElement>
            ) => {
                let select: HTMLSelectElement = e.target;
                let value: number = parseInt(select.value);
                this.CupcakeStore.cupcakeCosts.quantityCost = value;
            },
            setCupcakeSize: (e: React.ChangeEvent<HTMLInputElement>) => {
                let select: HTMLInputElement = e.target;
                let value: string = select.value;
                this.CupcakeStore.cupcakeCount.size = value;
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
    };
    @observable ProductStore: IProductStore = {
        totalCost: 0,
    };
    @observable CartStore: ICartStore = {
        carts: [],
        currentCart: [],
    };
    @observable OrderStore: IOrderStore = {};
    @observable UserStore: IUserStore = {};

    // cupcake flavors

    //value derived from existing state
    @computed updateCakeBaseCost = () => {
        let cakeBaseCost =
            this.CakeStore.cakeCosts.sizeCost +
            this.CakeStore.cakeCosts.tierCost;
        return cakeBaseCost;
    };
}

export const globalStore = new GlobalStateStore();

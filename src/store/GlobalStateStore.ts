import { observable, makeAutoObservable, action } from "mobx";
import { ProductData } from "../data/Products";
import { CakeTiers } from "./constants/Enums";
import { ICartStore } from "./schemas/ICartStore";
import { IOrderStore } from "./schemas/IOrderStore";
import { IProductStore } from "./schemas/IProductStore";
import { IUserStore } from "./schemas/IUserStore";

export class GlobalStateStore {
    constructor() {
        makeAutoObservable(this);
    }

    @observable ProductStore: IProductStore = {
        cake: {
            // cake base
            size: "",
            serves: "",
            shape: "",
            tier: "",
            // base cost
            tierCost: 0,
            sizeCost: 0,

            //cake flavors
            flavor: "",
            filling: "",
            frosting: "",
            fruit: "",
            // flavors cost
            flavorsCost: 0,
            frostingsCost: 0,
            fillingsCost: 0,
            fruitCost: 0,

            // cake details
            cakeOccasion: "",
            cakeRecipient: "",
            preferredColors: "",
            cakeInscription: "",
            cakePhotoExample: "",
            cakeLinkExample: "",
            additionalDetails: "",
        },
        cupcake: {
            // cupcake count
            size: "",
            serves: "",
            quantity: "",
            // cupcake count cost
            quantityCost: 0,

            //cupcake flavor
            flavor: "",
            frosting: "",
            // cupcake flaovrs cost
            flavorsCost: 0,
            frostingsCost: 0,

            //cupcake details
        },
        cookie: {
            // cookie count
            size: "",
            serves: "",
            quantity: "",
            // cookie count cost
            quantityCost: 0,

            //cupcake flavor
            flavor: "",
            frosting: "",
            // cookie flaovrs cost
            flavorsCost: 0,
            frostingsCost: 0,

            //cupcake details
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
    //cake actions
    // cake base
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
    handleCakeSizeCost = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        this.ProductStore.cake.sizeCost = value;
    };

    // cake flavors
    //TODO: write string value of target event to order and cart
    handleCakeFlavorCost = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        this.ProductStore.cake.flavorsCost = value;
    };
    handleCakeFrostingCost = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        this.ProductStore.cake.frostingsCost = value;
    };
    handleCakeFillingCost = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        this.ProductStore.cake.fillingsCost = value;
    };
    handleFruitCost = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);
        this.ProductStore.cake.fruitCost = value;
    };

    // cake details
    handleCakeOccasion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: string = select.value;
        this.ProductStore.cake.cakeOccasion = value;
    };
    handleCakeRecipient = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: string = select.value;
        this.ProductStore.cake.cakeRecipient = value;
    };
    handleCakeInscription = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: string = select.value;
        this.ProductStore.cake.cakeInscription = value;
    };
    // TODO: handle photo for order and cart
    handleCakePhotoExample = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: string = select.value;
        this.ProductStore.cake.cakePhotoExample = value;
    };
    // TODO: handle link for order and cart
    handleCakeLinkExample = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: string = select.value;
        this.ProductStore.cake.cakeLinkExample = value;
    };
    handleAdditionalDetails = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: string = select.value;
        this.ProductStore.cake.additionalDetails = value;
    };
}

export const globalStore = new GlobalStateStore();

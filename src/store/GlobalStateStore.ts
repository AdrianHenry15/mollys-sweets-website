import { observable, makeAutoObservable, action } from "mobx";
import {
    CakeShapes,
    CakeTiers,
    DeliveryOption,
    Occasion,
    ProductCategories,
    ProductSizes,
    Status,
} from "./constants/Enums";

// stores
import { ICakeStore } from "./schemas/FeatureStores/ICakeStore";
import { ICupcakeStore } from "./schemas/FeatureStores/ICupcakeStore";
import { ICookieStore } from "./schemas/FeatureStores/ICookieStore";
import { IUserStore } from "./schemas/IUserStore";
import { ICategory } from "./schemas/ICategoryStore";
import { IHelperStore } from "./schemas/IHelperStore";

export class GlobalStateStore {
    constructor() {
        makeAutoObservable(this);
    }
    // ========================================================= OBSERVABLES =========================================================

    @observable HelperStore: IHelperStore = {
        charToUpper: (name: string) => {
            let strLower = name.toLowerCase();
            const category = this.CategoryStore.category;

            // if the category is Cakes make sure to include the 's' at the end of the property value
            return category === ProductCategories.CAKES
                ? strLower.charAt(0).toUpperCase() +
                      name.slice(1).replace("s", "")
                : strLower.charAt(0).toUpperCase() + name.slice(1);
        },
    };

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

    @observable UserStore: IUserStore = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        validating: false,
        errors: null,
        status: Status.NONE,
    };

    @observable CategoryStore: ICategory = {
        category: "",
        getCategory: action((category: string) => {
            this.CategoryStore.category = category;
            console.log(this.CategoryStore.category);
        }),
    };
}

// HYDRATION CREATE FUNCTION
// const hydrate = create({});

// GLOBAL STORE INSTANCE
export const globalStore = new GlobalStateStore();

// // HYDRATION TO GLOBALSTORE
// hydrate("GlobalStore", globalStore, GlobalStateStore).then(() =>
//     console.log("Application Hydrated")
// );

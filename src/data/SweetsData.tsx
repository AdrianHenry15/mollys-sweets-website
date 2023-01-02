// Cakes
const MainCake = require("../assets/imgs/cakes/main-cake.jpg");
const ChocolateCake = require("../assets/imgs/cakes/backdrop_cake.jpg");
const BlueberryRusticCake = require("../assets/imgs/cakes/blueberry-choclate-rustic.jpg");
const WeddingCake = require("../assets/imgs/cakes/wedding-cake-1.jpg");
const BerryCake = require("../assets/imgs/cakes/vanilla-chocolate-berry.jpg");
const BirthdayCake = require("../assets/imgs/cakes/happy_birthday_cake.jpg");

// Cupcakes
const Strawberry_Cupcake = require("../assets/imgs/cupcakes/backdrop_cupcake.jpg");
const Vanilla_Cupcake = require("../assets/imgs/cupcakes/cupcake-1.jpg");
const Chocolate_Cupcake = require("../assets/imgs/cupcakes/cupcake-2.jpg");
const Assortment_Cupcake = require("../assets/imgs/cupcakes/cupcake-variety.jpg");
const RedVelvet_Cupcake = require("../assets/imgs/cupcakes/red_velvet.jpg");
const Valentines_Cupcake = require("../assets/imgs/cupcakes/valentines.jpg");

// Cookies
const ChocolateChip_Cookie = require("../assets/imgs/cookies/backdrop_cookie.jpg");
const Cookie_Assortment = require("../assets/imgs/cookies/alot.jpg");
const Birthday_Cookie = require("../assets/imgs/cookies/birthday_cookie.jpg");
const Gooey_Chocolate_Chip_Cookie = require("../assets/imgs/cookies/gooey.jpg");
const Grandmas_Chocolate_Chip_Cookie = require("../assets/imgs/cookies/grandmas.jpg");
const Snickerdoodle_Cookie = require("../assets/imgs/cookies/snickerdoodle.jpg");

// Pictures Object Array
export const Sweets = {
    Cakes: [
        {
            id: 1,
            name: "Main Cake",
            description: "Chocolate Cake with Cherries",
            src: MainCake,
        },
        {
            id: 2,
            name: "Chocolate Cake",
            description: "Chocolate Cake with Cherries",
            src: ChocolateCake,
        },
        {
            id: 3,
            name: "Blueberry Rustic Cake",
            description: "Chocolate Cake with Cherries",
            src: BlueberryRusticCake,
        },
        {
            id: 4,
            name: "Wedding Cake",
            description: "Chocolate Cake with Cherries",
            src: WeddingCake,
        },
        {
            id: 5,
            name: "Berry Cake",
            description: "Chocolate Cake with Cherries",
            src: BerryCake,
        },
        {
            id: 6,
            name: "Birthday Cake",
            description: "Chocolate Cake with Cherries",
            src: BirthdayCake,
        },
    ],
    Cupcakes: [
        {
            id: 1,
            name: "Strawberry Cupcake",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Strawberry_Cupcake,
        },
        {
            id: 2,
            name: "Vanilla Cupcake",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Vanilla_Cupcake,
        },
        {
            id: 3,
            name: "Chocolate Cupcake",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Chocolate_Cupcake,
        },
        {
            id: 4,
            name: "Assortment of Cupcakes",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Assortment_Cupcake,
        },
        {
            id: 5,
            name: "Red Velvet Cupcake",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: RedVelvet_Cupcake,
        },
        {
            id: 6,
            name: "Valentine's Cupcake",
            description:
                "Vanilla cupcake with Strawberry icing, topped with perogies and a cherry",
            src: Valentines_Cupcake,
        },
    ],
    Cookies: [
        {
            id: 1,
            name: "Chocolate Chip Cookie",
            description: "This that cookie",
            src: ChocolateChip_Cookie,
        },
        {
            id: 2,
            name: "Cookie Assortment",
            description: "This that cookie",
            src: Cookie_Assortment,
        },
        {
            id: 3,
            name: "Birthday Cookie",
            description: "This that cookie",
            src: Birthday_Cookie,
        },
        {
            id: 4,
            name: "Gooey Chocolate Chip Cookie",
            description: "This that cookie",
            src: Gooey_Chocolate_Chip_Cookie,
        },
        {
            id: 5,
            name: "Grandmas Chocolate Chip Cookie",
            description: "This that cookie",
            src: Grandmas_Chocolate_Chip_Cookie,
        },
        {
            id: 6,
            name: "Snickerdoodle Cookie",
            description: "This that cookie",
            src: Snickerdoodle_Cookie,
        },
    ],
};

export type SweetGenres = {
    id: number;
    name: string;
}[];

export const Flavors: SweetGenres = [
    {
        id: 1,
        name: "Vanilla Bean",
    },
    {
        id: 2,
        name: "Almond",
    },
    {
        id: 3,
        name: "Carrot",
    },
    {
        id: 4,
        name: "Coconut",
    },
    {
        id: 5,
        name: "Chocolate Earthquake",
    },
    {
        id: 6,
        name: "Strawberry Champagne",
    },
    {
        id: 7,
        name: "Red Velvet",
    },
    {
        id: 8,
        name: "Chocolate",
    },
    {
        id: 9,
        name: "Birthday",
    },
    {
        id: 10,
        name: "Oreo",
    },
    {
        id: 11,
        name: "Brown Butter",
    },
    {
        id: 12,
        name: "Lemon",
    },
];

export const Fillings: SweetGenres = [
    {
        id: 1,
        name: "Blueberry Jam",
    },
    {
        id: 2,
        name: "Strawberry Jam",
    },
    {
        id: 3,
        name: "Ganache",
    },
    {
        id: 4,
        name: "Vanilla Mousse",
    },
    {
        id: 5,
        name: "Chocolate Mousse",
    },
    {
        id: 6,
        name: "Strawberry Mousse",
    },
    {
        id: 7,
        name: "Caramel Mousse",
    },
    {
        id: 8,
        name: "Peanut Butter Mousse",
    },
    {
        id: 9,
        name: "Boston Cream",
    },
    {
        id: 10,
        name: "Fresh Fruit",
    },
];

export const Frostings: SweetGenres = [
    {
        id: 1,
        name: "Swiss Buttercream",
    },
    {
        id: 2,
        name: "Cream Cheese Buttercream",
    },
    {
        id: 3,
        name: "Buttercream",
    },
];

export const CookieTypes: SweetGenres = [
    {
        id: 1,
        name: "Chocolate Chip",
    },
    {
        id: 2,
        name: "Sugar Cookie",
    },
    {
        id: 3,
        name: "Peanut Butter",
    },
    {
        id: 4,
        name: "Oatmeal Raisin",
    },
    {
        id: 5,
        name: "Snickerdoodle",
    },
    {
        id: 6,
        name: "Dark Chocolate",
    },
    {
        id: 7,
        name: "Red Velvet",
    },
    {
        id: 8,
        name: "Birthday Cake",
    },
    {
        id: 9,
        name: "Brownie",
    },
    {
        id: 11,
        name: "Oreo",
    },
    {
        id: 12,
        name: "Coconut",
    },
    {
        id: 13,
        name: "Drop Cookies",
    },
];

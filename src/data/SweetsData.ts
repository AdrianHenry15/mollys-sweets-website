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
    price: number;
}[];

export type SizeType = {
    id: number;
    size: string;
    amountOfPeople: string;
    price: number;
}[];

export const Fruits: SweetGenres = [
    {
        id: 0,
        name: "",
        price: 0,
    },
    {
        id: 1,
        name: "Banana",
        price: 2.75,
    },
    {
        id: 1,
        name: "Apple",
        price: 2.75,
    },
    {
        id: 1,
        name: "Blueberry",
        price: 2.75,
    },
    {
        id: 1,
        name: "Strawberry",
        price: 2.75,
    },
];

export const SheetSizes: SizeType = [
    {
        id: 0,
        size: "",
        amountOfPeople: "",
        price: 0,
    },
    {
        id: 1,
        size: "1/4",
        amountOfPeople: "28 People",
        price: 2.75,
    },
    {
        id: 1,
        size: "1/2",
        amountOfPeople: "48 People",
        price: 2.75,
    },
    {
        id: 1,
        size: "FULL",
        amountOfPeople: "98 People",
        price: 2.75,
    },
];

export const RoundSizes: SizeType = [
    {
        id: 0,
        size: "",
        amountOfPeople: "",
        price: 0,
    },
    {
        id: 1,
        size: `6"`,
        amountOfPeople: "6-8 People",
        price: 2.75,
    },
    {
        id: 2,
        size: `7"`,
        amountOfPeople: "10-12 People",
        price: 2.75,
    },
    {
        id: 3,
        size: `8"`,
        amountOfPeople: "10-18 People",
        price: 2.75,
    },
    {
        id: 4,
        size: `9"`,
        amountOfPeople: "20-24 People",
        price: 2.75,
    },
    {
        id: 5,
        size: `10"`,
        amountOfPeople: "26-35 People",
        price: 2.75,
    },
    {
        id: 6,
        size: `12"`,
        amountOfPeople: "35-48 People",
        price: 2.75,
    },
    {
        id: 7,
        size: `14"`,
        amountOfPeople: "50-65 People",
        price: 2.75,
    },
    {
        id: 8,
        size: `16"`,
        amountOfPeople: "70-85 People",
        price: 2.75,
    },
];

export const MainFlavors: SweetGenres = [
    {
        id: 0,
        name: "",
        price: 0,
    },
    {
        id: 1,
        name: "Vanilla Bean",
        price: 2.75,
    },
    {
        id: 2,
        name: "Almond",
        price: 2.75,
    },
    {
        id: 3,
        name: "Carrot",
        price: 2.75,
    },
    {
        id: 4,
        name: "Coconut",
        price: 2.75,
    },
    {
        id: 5,
        name: "Chocolate Earthquake",
        price: 2.75,
    },
    {
        id: 6,
        name: "Strawberry Champagne",
        price: 2.75,
    },
    {
        id: 7,
        name: "Red Velvet",
        price: 2.75,
    },
    {
        id: 8,
        name: "Chocolate",
        price: 2.75,
    },
    {
        id: 9,
        name: "Birthday",
        price: 2.75,
    },
    {
        id: 10,
        name: "Oreo",
        price: 2.75,
    },
    {
        id: 11,
        name: "Brown Butter",
        price: 2.75,
    },
    {
        id: 12,
        name: "Lemon",
        price: 2.75,
    },
];

export const Fillings: SweetGenres = [
    {
        id: 0,
        name: "",
        price: 0,
    },
    {
        id: 1,
        name: "Blueberry Jam",
        price: 2.75,
    },
    {
        id: 2,
        name: "Strawberry Jam",
        price: 2.75,
    },
    {
        id: 3,
        name: "Ganache",
        price: 2.75,
    },
    {
        id: 4,
        name: "Vanilla Mousse",
        price: 2.75,
    },
    {
        id: 5,
        name: "Chocolate Mousse",
        price: 2.75,
    },
    {
        id: 6,
        name: "Strawberry Mousse",
        price: 2.75,
    },
    {
        id: 7,
        name: "Caramel Mousse",
        price: 2.75,
    },
    {
        id: 8,
        name: "Peanut Butter Mousse",
        price: 2.75,
    },
    {
        id: 9,
        name: "Boston Cream",
        price: 2.75,
    },
    {
        id: 10,
        name: "Fresh Fruit",
        price: 2.75,
    },
];

export const Frostings: SweetGenres = [
    {
        id: 0,
        name: "",
        price: 0,
    },
    {
        id: 1,
        name: "Swiss Buttercream",
        price: 2.75,
    },
    {
        id: 2,
        name: "Cream Cheese Buttercream",
        price: 2.75,
    },
    {
        id: 3,
        name: "Buttercream",
        price: 2.75,
    },
];

export const CookieTypes: SweetGenres = [
    {
        id: 0,
        name: "",
        price: 0,
    },
    {
        id: 1,
        name: "Chocolate Chip",
        price: 2.75,
    },
    {
        id: 2,
        name: "Sugar Cookie",
        price: 2.75,
    },
    {
        id: 3,
        name: "Peanut Butter",
        price: 2.75,
    },
    {
        id: 4,
        name: "Oatmeal Raisin",
        price: 2.75,
    },
    {
        id: 5,
        name: "Snickerdoodle",
        price: 2.75,
    },
    {
        id: 6,
        name: "Dark Chocolate",
        price: 2.75,
    },
    {
        id: 7,
        name: "Red Velvet",
        price: 2.75,
    },
    {
        id: 8,
        name: "Birthday Cake",
        price: 2.75,
    },
    {
        id: 9,
        name: "Brownie",
        price: 2.75,
    },
    {
        id: 11,
        name: "Oreo",
        price: 2.75,
    },
    {
        id: 12,
        name: "Coconut",
        price: 2.75,
    },
    {
        id: 13,
        name: "Drop Cookies",
        price: 2.75,
    },
];

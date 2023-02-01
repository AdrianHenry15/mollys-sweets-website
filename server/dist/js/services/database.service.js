"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.collections = void 0;
// External Dependencies
const mongoDB = __importStar(require("mongodb"));
const dotenv = __importStar(require("dotenv"));
// Global Variables
exports.collections = {};
// Initialize Connection
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv.config();
        // make sure env is never undefined
        let mongoURI;
        if (process.env.DB_CONN_STRING) {
            mongoURI = process.env.DB_CONN_STRING;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        // make sure env is never undefined
        // COLLECTION VARIABLES
        //cakes
        let cakeCollection;
        //cake bases
        let cakeBaseCollection;
        let cakeTierCollection;
        let cakeShapeCollection;
        let cakeSizeCollection;
        // cake flavors
        let cakeFlavorCollection;
        let cakeFrostingCollection;
        let cakeFillingCollection;
        let cakeFruitCollection;
        //cupcakes
        let cupcakeCollection;
        //cupcake base
        let cupcakeBaseCollection;
        let cupcakeQuantityCollection;
        let cupcakeSizeCollection;
        //cupcake flavor
        let cupcakeFlavorCollection;
        let cupcakeFrostingCollection;
        //cookies
        let cookieCollection;
        // cookie base
        let cookieBaseCollection;
        let cookieQuantityCollection;
        let cookieSizeCollection;
        //cookie flavor
        let cookieFlavorCollection;
        let cookieFrostingCollection;
        //other
        let cartCollection;
        let orderCollection;
        let productCollection;
        let userCollection;
        let categoryCollection;
        // START COLLECTIONS
        // cakes
        if (process.env.CAKE_COLLECTION_NAME) {
            cakeCollection = process.env.CAKE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        // cake base
        if (process.env.CAKE_BASE_COLLECTION_NAME) {
            cakeBaseCollection = process.env.CAKE_BASE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.CAKE_SIZE_COLLECTION_NAME) {
            cakeSizeCollection = process.env.CAKE_SIZE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.CAKE_TIER_COLLECTION_NAME) {
            cakeTierCollection = process.env.CAKE_TIER_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.CAKE_SHAPE_COLLECTION_NAME) {
            cakeShapeCollection = process.env.CAKE_SHAPE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        // cake flavor
        if (process.env.CAKE_FLAVOR_COLLECTION_NAME) {
            cakeFlavorCollection = process.env.CAKE_FLAVOR_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.CAKE_FROSTING_COLLECTION_NAME) {
            cakeFlavorCollection = process.env.CAKE_FROSTING_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.CAKE_FILLING_COLLECTION_NAME) {
            cakeFillingCollection = process.env.CAKE_FILLING_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.CAKE_FRUIT_COLLECTION_NAME) {
            cakeFruitCollection = process.env.CAKE_FRUIT_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        // cupcakes
        if (process.env.CUPCAKE_COLLECTION_NAME) {
            cupcakeCollection = process.env.CUPCAKE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        //cupcake bases
        if (process.env.CUPCAKE_BASE_COLLECTION_NAME) {
            cupcakeBaseCollection = process.env.CUPCAKE_BASE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.CUPCAKE_SIZE_COLLECTION_NAME) {
            cupcakeSizeCollection = process.env.CUPCAKE_SIZE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.CUPCAKE_QUANTITY_COLLECTION_NAME) {
            cupcakeQuantityCollection =
                process.env.CUPCAKE_QUANTITY_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        //cupcake flavors
        if (process.env.CUPCAKE_FLAVOR_COLLECTION_NAME) {
            cupcakeFlavorCollection = process.env.CUPCAKE_FLAVOR_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.CUPCAKE_FROSTING_COLLECTION_NAME) {
            cupcakeFrostingCollection =
                process.env.CUPCAKE_FROSTING_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        // cookies
        if (process.env.COOKIE_COLLECTION_NAME) {
            cookieCollection = process.env.COOKIE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        //cookie base
        if (process.env.COOKIE_BASE_COLLECTION_NAME) {
            cookieBaseCollection = process.env.COOKIE_BASE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.COOKIE_SIZE_COLLECTION_NAME) {
            cookieSizeCollection = process.env.COOKIE_SIZE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.COOKIE_QUANTITY_COLLECTION_NAME) {
            cookieQuantityCollection = process.env.COOKIE_QUANTITY_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        // cookie flavors
        if (process.env.COOKIE_FLAVOR_COLLECTION_NAME) {
            cookieFlavorCollection = process.env.COOKIE_FLAVOR_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.COOKIE_FROSTING_COLLECTION_NAME) {
            cookieFlavorCollection = process.env.COOKIE_FROSTING_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        // other
        if (process.env.CART_COLLECTION_NAME) {
            cartCollection = process.env.CART_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.ORDER_COLLECTION_NAME) {
            orderCollection = process.env.ORDER_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.PRODUCT_COLLECTION_NAME) {
            productCollection = process.env.PRODUCT_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.USER_COLLECTION_NAME) {
            userCollection = process.env.USER_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        if (process.env.CATEGORY_COLLECTION_NAME) {
            categoryCollection = process.env.CATEGORY_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        // END OF COLLECTIONS
        // MongoDB Client Constructor
        // const options = { useNewUrlParser: true, useUnifiedTopology: true };
        const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
        yield client.connect();
        const db = client.db(process.env.DB_NAME);
        //JSON schema validation to ensure all future documents match the model we expect.
        // await db.command({
        //     "collMod": [process.env.CART_COLLECTION_NAME, process.env.CAKE_COLLECTION_NAME],
        //     "validator": {
        //         $jsonSchema: {
        //             bsonType: "object",
        //             required: ["name", "price", "category"],
        //             additionalProperties: false,
        //             properties: {
        //             _id: {},
        //             name: {
        //                 bsonType: "string",
        //                 description: "'name' is required and is a string"
        //             },
        //             price: {
        //                 bsonType: "number",
        //                 description: "'price' is required and is a number"
        //             },
        //             category: {
        //                 bsonType: "string",
        //                 description: "'category' is required and is a string"
        //             }
        //             }
        //         }
        //      }
        // });
        // COLLECTIONS
        //cakes
        const cakesCollection = db.collection(process.env.CAKE_COLLECTION_NAME);
        // CAKE BASES
        const cakeBasesCollection = db.collection(process.env.CAKE_BASE_COLLECTION_NAME);
        const cakeShapesCollection = db.collection(process.env.CAKE_SHAPE_COLLECTION_NAME);
        const cakeTiersCollection = db.collection(process.env.CAKE_TIER_COLLECTION_NAME);
        const cakeSizesCollection = db.collection(process.env.CAKE_SIZE_COLLECTION_NAME);
        // CAKE FLAVORS
        const cakeFlavorsCollection = db.collection(process.env.CAKE_FLAVOR_COLLECTION_NAME);
        const cakeFrostingsCollection = db.collection(process.env.CAKE_FROSTING_COLLECTION_NAME);
        const cakeFillingsCollection = db.collection(process.env.CAKE_FILLING_COLLECTION_NAME);
        const cakeFruitsCollection = db.collection(process.env.CAKE_FRUIT_COLLECTION_NAME);
        //cupcakes
        const cupcakesCollection = db.collection(process.env.CUPCAKE_COLLECTION_NAME);
        // CUPCAKE BASES
        const cupcakeBasesCollection = db.collection(process.env.CUPCAKE_BASE_COLLECTION_NAME);
        const cupcakeSizesCollection = db.collection(process.env.CUPCAKE_SIZE_COLLECTION_NAME);
        const cupcakeQuantitiesCollection = db.collection(process.env.CUPCAKE_QUANTITY_COLLECTION_NAME);
        // CUPCAKE FLAVORS
        const cupcakeFlavorsCollection = db.collection(process.env.CUPCAKE_FLAVOR_COLLECTION_NAME);
        const cupcakeFrostingsCollection = db.collection(process.env.CUPCAKE_FROSTING_COLLECTION_NAME);
        //cookies
        const cookiesCollection = db.collection(process.env.COOKIE_COLLECTION_NAME);
        // COOKIE BASES
        const cookieBasesCollection = db.collection(process.env.COOKIE_FLAVOR_COLLECTION_NAME);
        const cookieSizesCollection = db.collection(process.env.COOKIE_SIZE_COLLECTION_NAME);
        const cookieQuantitiesCollection = db.collection(process.env.COOKIE_QUANTITY_COLLECTION_NAME);
        // COOKIE FLAVORS
        const cookieFlavorsCollection = db.collection(process.env.COOKIE_BASE_COLLECTION_NAME);
        const cookieFrostingsCollection = db.collection(process.env.COOKIE_FROSTING_COLLECTION_NAME);
        //other
        const cartsCollection = db.collection(process.env.CART_COLLECTION_NAME);
        const ordersCollection = db.collection(process.env.ORDER_COLLECTION_NAME);
        const productsCollection = db.collection(process.env.PRODUCT_COLLECTION_NAME);
        const categoriesCollection = db.collection(process.env.CATEGORY_COLLECTION_NAME);
        const usersCollection = db.collection(process.env.USER_COLLECTION_NAME);
        //cakes
        exports.collections.cakes = cakesCollection;
        //CAKE BASES
        exports.collections.cakeBases = cakeBasesCollection;
        exports.collections.cakeShapes = cakeBasesCollection;
        exports.collections.cakeSizes = cakeBasesCollection;
        exports.collections.cakeTiers = cakeBasesCollection;
        // CAKE FLAOVRS
        exports.collections.cakeFlavors = cakeFlavorsCollection;
        exports.collections.cakeFrostings = cakeFlavorsCollection;
        exports.collections.cakeFillings = cakeFlavorsCollection;
        exports.collections.cakeFruits = cakeFlavorsCollection;
        //cookies
        exports.collections.cookies = cookiesCollection;
        //COOKIE BASES
        exports.collections.cookieBases = cookieBasesCollection;
        exports.collections.cookieQuantities = cookieBasesCollection;
        exports.collections.cookieSizes = cookieBasesCollection;
        // COOKE FLAVORS
        exports.collections.cookieFlavors = cookieFlavorsCollection;
        exports.collections.cookieFrostings = cookieFlavorsCollection;
        //cupcakes
        exports.collections.cupcakes = cupcakesCollection;
        // CUPCAKE BASES
        exports.collections.cupcakeBases = cupcakeBasesCollection;
        exports.collections.cupcakeQuantities = cupcakeBasesCollection;
        exports.collections.cupcakeSizes = cupcakeBasesCollection;
        // CUPCAKE FLAVORS
        exports.collections.cupcakeFlavors = cupcakeFlavorsCollection;
        exports.collections.cupcakeFrostings = cupcakeFlavorsCollection;
        //other
        exports.collections.categories = categoriesCollection;
        exports.collections.carts = cartsCollection;
        exports.collections.orders = ordersCollection;
        exports.collections.products = productsCollection;
        exports.collections.users = usersCollection;
        console.log(`Successfully connected to database: ${db.databaseName}`);
    });
}
exports.connectToDatabase = connectToDatabase;

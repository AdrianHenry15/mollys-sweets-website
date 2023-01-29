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
        // START COLLECTIONS
        let cartCollection;
        if (process.env.CART_COLLECTION_NAME) {
            cartCollection = process.env.CART_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        let cakeCollection;
        if (process.env.CAKE_COLLECTION_NAME) {
            cakeCollection = process.env.CAKE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        let cupcakeCollection;
        if (process.env.CUPCAKE_COLLECTION_NAME) {
            cupcakeCollection = process.env.CUPCAKE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        let cookieCollection;
        if (process.env.COOKIE_COLLECTION_NAME) {
            cookieCollection = process.env.COOKIE_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        let orderCollection;
        if (process.env.ORDER_COLLECTION_NAME) {
            orderCollection = process.env.ORDER_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        let productCollection;
        if (process.env.PRODUCT_COLLECTION_NAME) {
            productCollection = process.env.PRODUCT_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        let userCollection;
        if (process.env.USER_COLLECTION_NAME) {
            userCollection = process.env.USER_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        let categoryCollection;
        if (process.env.CATEGORY_COLLECTION_NAME) {
            categoryCollection = process.env.CATEGORY_COLLECTION_NAME;
        }
        else {
            throw new Error("Enviroment Variables Invalid");
        }
        // END OF COLLECTIONS
        // MongoDB Client Constructor
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING, options);
        yield client.connect();
        const db = client.db(process.env.DB_NAME);
        // COLLECTIONS
        const cartsCollection = db.collection(process.env.CART_COLLECTION_NAME);
        const cakesCollection = db.collection(process.env.CAKE_COLLECTION_NAME);
        const cupcakesCollection = db.collection(process.env.CUPCAKE_COLLECTION_NAME);
        const cookiesCollection = db.collection(process.env.COOKIE_COLLECTION_NAME);
        const ordersCollection = db.collection(process.env.ORDER_COLLECTION_NAME);
        const productsCollection = db.collection(process.env.PRODUCT_COLLECTION_NAME);
        const categoriesCollection = db.collection(process.env.CATEGORY_COLLECTION_NAME);
        const usersCollection = db.collection(process.env.USER_COLLECTION_NAME);
        exports.collections.carts = cartsCollection;
        exports.collections.cakes = cakesCollection;
        exports.collections.categories = categoriesCollection;
        exports.collections.cookies = cookiesCollection;
        exports.collections.cupcakes = cupcakesCollection;
        exports.collections.orders = ordersCollection;
        exports.collections.products = productsCollection;
        exports.collections.users = usersCollection;
        console.log(`Successfully connected to database: ${db.databaseName}`);
    });
}
exports.connectToDatabase = connectToDatabase;

// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: {
    carts?: mongoDB.Collection;
    categories?: mongoDB.Collection;
    orders?: mongoDB.Collection;
    products?: mongoDB.Collection;
    users?: mongoDB.Collection;
} = {};

// Initialize Connection
export async function connectToDatabase() {
    dotenv.config();

    // make sure env is never undefined
    let mongoURI: string;
    if (process.env.DB_CONN_STRING) {
        mongoURI = process.env.DB_CONN_STRING;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    // make sure env is never undefined
    let cartCollection: string;
    if (process.env.COLLECTION_NAME) {
        cartCollection = process.env.COLLECTION_NAME;
    } else {
        throw new Error("Enviroment Variables Invalid");
    }

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
        process.env.DB_CONN_STRING
    );

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const cartsCollection: mongoDB.Collection = db.collection(
        process.env.COLLECTION_NAME
    );

    collections.carts = cartsCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${cartsCollection.collectionName}`
    );
}

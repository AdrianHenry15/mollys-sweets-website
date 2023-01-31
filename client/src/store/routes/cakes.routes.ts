import axios from "axios";
import { ICake } from "../interfaces/CakeInterfaces/cakes";

const baseUrl: string = "http://localhost:5000/cake-route";

// GET

export const getCakes = () => {
    axios.get<ICake>(baseUrl).catch(function (error) {
        console.log(error.toJSON());
    });
};

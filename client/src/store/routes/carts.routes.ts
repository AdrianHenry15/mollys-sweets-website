import axios, { AxiosResponse } from "axios";
import { APIDataType } from "../interfaces/cakes";

const baseUrl: string = "http://localhost:4000";

export const getCakes = async (): Promise<AxiosResponse<APIDataType>> => {
    try {
        const cakes: AxiosResponse<APIDataType> = await axios.get(
            baseUrl + "/cakes"
        );
        return cakes;
    } catch (error: any) {
        throw new Error(error);
    }
};

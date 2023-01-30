interface ICake {
    cakeBase: {
        singlerTier: boolean;
        multipleTier: boolean;
        roundCake: boolean;
        sheetCake: boolean;
        cakeSize: string;
    };
    cakeFlavor: {
        flavor: string;
        filling: string;
        frosting: string;
        fruit: boolean;
        fruitType: string;
        totalPrice: number;
    };
}

interface CakeProps {
    cake: ICake;
}

export type APIDataType = {
    message: string;
    status: string;
    cakes: ICake[];
    cake?: ICake;
};

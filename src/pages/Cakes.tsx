// Styles
import "../styles/Cakes.scss";
import "../styles/GlobalStyles.scss";

// Data
import { Sweets } from "../data/Sweets";

// Frameworks
import ScrollContainer from "react-indiana-drag-scroll";

export type SweetGenres = {
    id: number;
    name: string;
}[];

export const CakeFlavors: SweetGenres = [
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

export const CakeFillings: SweetGenres = [
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

const Cakes = () => {
    return (
        <body className="row-container">
            <h1>Cakes</h1>
            <div className="scroll-wrapper">
                <div className="dev-scroll-container">
                    <h3 className="scroll-items-title">Cakes</h3>
                    <ScrollContainer horizontal className="scroll-container">
                        <div className="scroll-items-container">
                            {Sweets.Cakes.map(
                                ({ id, name, description, src }) => {
                                    return (
                                        <div
                                            key={`div-${name}${id}`}
                                            className="scroll-items-wrapper"
                                        >
                                            <img
                                                src={src}
                                                alt={name}
                                                className="scroll-items"
                                            />
                                            <h5 className="scroll-name">
                                                {name}
                                            </h5>
                                            <i className="scroll-description">
                                                {description}
                                            </i>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </ScrollContainer>
                </div>
            </div>
            <div className="flavors-container">
                <h4>Flavors</h4>
                <div className="flavor-items-container">
                    {CakeFlavors.map(({ id, name }) => {
                        return <div className="flavor-items">{name}</div>;
                    })}
                </div>
            </div>
        </body>
    );
};

export default Cakes;

// Styles
import "../styles/Cookies.scss";
import "../styles/GlobalStyles.scss";

// Data
import { SweetGenres } from "./Cakes";
import { Sweets } from "../data/Sweets";

// Frameworks
import ScrollContainer from "react-indiana-drag-scroll";

export const Flavors: SweetGenres = [
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

const Cookies = () => {
    return (
        <body className="row-container">
            <h1>Cookies</h1>
            <div className="scroll-wrapper">
                <div className="dev-scroll-container">
                    <h3 className="scroll-items-title">Cookies</h3>
                    <ScrollContainer horizontal className="scroll-container">
                        <div className="scroll-items-container">
                            {Sweets.Cookies.map(
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
        </body>
    );
};

export default Cookies;

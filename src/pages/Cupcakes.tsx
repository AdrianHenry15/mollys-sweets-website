// Styles
import "../styles/Cupcakes.scss";
import "../styles/GlobalStyles.scss";

// Data
// import { SweetGenres } from "./Cakes";
import { Sweets } from "../data/Sweets";

// Frameworks
import ScrollContainer from "react-indiana-drag-scroll";

// const CupcakeFlavors: SweetGenres = [
//     {
//         id: 1,
//         name: "Chocolate Chip",
//     },
//     {
//         id: 2,
//         name: "Peanut Butter",
//     },
//     {
//         id: 3,
//         name: "Snickerdoodle",
//     },
//     {
//         id: 4,
//         name: "Chocolate",
//     },
//     {
//         id: 5,
//         name: "Red Velvet",
//     },
//     {
//         id: 6,
//         name: "Birthday Cake",
//     },

//     {
//         id: 7,
//         name: "Oreo",
//     },
//     {
//         id: 8,
//         name: "Coconut",
//     },
//     {
//         id: 9,
//         name: "Vanilla Bean",
//     },
//     {
//         id: 10,
//         name: "Lemon",
//     },
//     {
//         id: 11,
//         name: "Strawberry",
//     },
// ];

const Cupcakes = () => {
    return (
        <body className="row-container">
            <h1>Cupcakes</h1>
            <div className="scroll-wrapper">
                <div className="dev-scroll-container">
                    <h3 className="scroll-items-title">Cupcakes</h3>
                    <ScrollContainer horizontal className="scroll-container">
                        <div className="scroll-items-container">
                            {Sweets.Cupcakes.map(
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

export default Cupcakes;

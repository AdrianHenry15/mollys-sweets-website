// Styles
import "../styles/Cakes.scss";
import "../styles/GlobalStyles.scss";

// Data
import { Fillings, Flavors, Frostings, Sweets } from "../data/SweetsData";

// Frameworks
import ScrollContainer from "react-indiana-drag-scroll";
import { SweetGenres } from "../store/Enums";
import { render } from "@testing-library/react";

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
            <div className="genres-container">
                <div className="flavors-container">
                    <h4>Flavors</h4>
                    <div className="flavors-items-container">
                        {Flavors.map(({ id, name }) => {
                            return (
                                <span
                                    key={`${id}${name}`}
                                    className="flavors-items"
                                >
                                    {name}
                                </span>
                            );
                        })}
                    </div>
                </div>
                <div className="frostings-container">
                    <h4>Frostings</h4>
                    <div className="frostings-items-container">
                        {Frostings.map(({ id, name }) => {
                            return (
                                <span
                                    key={`${id}${name}`}
                                    className="frostings-items"
                                >
                                    {name}
                                </span>
                            );
                        })}
                    </div>
                </div>
                <div className="fillings-container">
                    <h4>Fillings</h4>
                    <div className="fillings-items-container">
                        {Fillings.map(({ id, name }) => {
                            return (
                                <span
                                    key={`${id}${name}`}
                                    className="fillings-items"
                                >
                                    {name}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Cakes;

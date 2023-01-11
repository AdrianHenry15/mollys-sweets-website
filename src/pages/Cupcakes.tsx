// Styles
import "../styles/Cupcakes.scss";
import "../styles/GlobalStyles.scss";

// Data
// import { SweetGenres } from "./Cakes";
import { Frostings, MainFlavors } from "../data/SweetsData";

// Frameworks
import ScrollContainer from "react-indiana-drag-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { SweetsImages } from "../data/ImageData";

const Cupcakes = () => {
    return (
        <section className="row-container">
            <h1>Cupcakes</h1>
            <section className="scroll-wrapper">
                <div className="dev-scroll-container">
                    <h3 className="scroll-items-title">Cupcakes</h3>
                    <ScrollContainer horizontal className="scroll-container">
                        <div className="scroll-items-container">
                            {SweetsImages.Cupcakes.map(
                                ({ id, name, description, src }) => {
                                    return (
                                        <div
                                            key={`div-${name}${id}`}
                                            className="scroll-items-wrapper"
                                        >
                                            <LazyLoadImage
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
            </section>
            <section className="genres-container">
                <div className="flavors-container">
                    <h4>Flavors</h4>
                    <div className="flavors-items-container">
                        {MainFlavors.map(({ id, name }) => {
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
            </section>
        </section>
    );
};

export default Cupcakes;

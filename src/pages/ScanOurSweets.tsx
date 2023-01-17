// Styles
import "../styles/SampleOurSweets.scss";
import "../styles/GlobalStyles.scss";

// Frameworks
import ScrollContainer from "react-indiana-drag-scroll";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Data
import { ProductCategories } from "../constants/Enums";
import { SweetsImages } from "../data/ImageData";

const ScanOurSweets = () => {
    return (
        <section className="row-container">
            <h1>Our Sweets</h1>
            <div className="scroll-wrapper">
                {(
                    Object.keys(ProductCategories) as Array<
                        keyof typeof ProductCategories
                    >
                ).map((key) => {
                    return (
                        <div
                            key={`div-${key}`}
                            className="dev-scroll-container"
                        >
                            <h3 className="scroll-items-title">
                                {ProductCategories[key]}
                            </h3>
                            <ScrollContainer
                                horizontal
                                className="scroll-container"
                            >
                                <div className="scroll-items-container">
                                    {SweetsImages[ProductCategories[key]].map(
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
                    );
                })}
            </div>
        </section>
    );
};

export default ScanOurSweets;

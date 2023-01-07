// Styles
import "../styles/Cookies.scss";
import "../styles/GlobalStyles.scss";

// Data
import { CookieTypes, Sweets } from "../data/SweetsData";

// Frameworks
import ScrollContainer from "react-indiana-drag-scroll";
import React from "react";

const Cookies = () => {
    return (
        <section className="row-container">
            <h1>Cookies</h1>
            <section className="scroll-wrapper">
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
            </section>
            <section className="genres-container">
                <div className="flavors-container">
                    <h4>Flavors</h4>
                    <div className="flavors-items-container">
                        {CookieTypes.map(({ id, name }) => {
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
            </section>
        </section>
    );
};

export default Cookies;

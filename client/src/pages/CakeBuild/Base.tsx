// styles
import "../../styles/CakeBuild/Base.scss";
//frameworks
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//images
import SingleRound from "../../assets/imgs/create_a_cake/single-tier-round-white.png";
import SingleSheet from "../../assets/imgs/create_a_cake/single-tier-sheet.png";
import MultipleRound from "../../assets/imgs/create_a_cake/multiple-tier-round-white.png";
//data
import { RoundSizes } from "../../data/CakesData";

const CakeBase = () => {
    return (
        <section className="base-cake-base-container">
            <h3>Choose Cake Base</h3>
            <hr />

            {/* Cake Tier */}
            <div className="base-cake-make-container">
                <h5 className="base-title">Cake Tier</h5>
                <div className="base-choice-container">
                    <div className="base-option">
                        <LazyLoadImage
                            className="base-choice"
                            src={SingleRound}
                            alt="round-cake"
                        />
                        <h5 className="base-option">Single</h5>
                    </div>
                    <div className="base-option">
                        <LazyLoadImage
                            className="base-choice"
                            src={MultipleRound}
                            alt="round-cake"
                        />
                        <h5 className="base-option">Multiple</h5>
                    </div>
                </div>
            </div>

            {/* Cake Shape */}
            <div className="base-cake-make-container">
                <h5 className="base-title">Cake Shape</h5>
                <div className="base-choice-container">
                    <div className="base-option">
                        <LazyLoadImage
                            className="base-choice"
                            src={SingleRound}
                            alt="round-cake"
                        />
                        <h5 className="base-option">Single</h5>
                    </div>
                    <div className="base-option">
                        <LazyLoadImage
                            className="base-choice"
                            src={SingleSheet}
                            alt="round-cake"
                        />
                        <h5 className="base-option">Sheet</h5>
                    </div>
                </div>
            </div>

            {/* Cake Size */}
            <div className="base-cake-make-container">
                <h5 className="base-title">Round Cake Size</h5>
                <div className="base-choice-container">
                    <div className="base-option">
                        <form action="">
                            <select
                                name="cake-size"
                                className="base-cake-size-dropdown"
                            >
                                {RoundSizes.map(
                                    ({ id, size, amountOfPeople, price }) => {
                                        if (size === "") {
                                            return (
                                                <option
                                                    key={`${size}${id}`}
                                                    value=""
                                                >
                                                    Choose One
                                                </option>
                                            );
                                        } else {
                                            return (
                                                <option
                                                    key={`${id}`}
                                                    value={size}
                                                >{`${size} (${amountOfPeople}) ($${price})`}</option>
                                            );
                                        }
                                    }
                                )}
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <div className="base-cake-make-container">
                <h5 className="base-title">Cake Base Cost</h5>
                <div>$0.00</div>
            </div>
        </section>
    );
};

export default CakeBase;

// styles
import "../../styles/BuildYourCake/Base.scss";
//frameworks
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//images
import SingleRound from "../../assets/imgs/create_a_cake/single-tier-round-white.png";
import SingleSheet from "../../assets/imgs/create_a_cake/single-tier-sheet.png";
import MultipleRound from "../../assets/imgs/create_a_cake/multiple-tier-round-white.png";
//data
import { RoundSizes } from "../../data/SweetsData";

const CakeBase = () => {
    return (
        <section className="cake-base-container">
            <h3>Choose Cake Base</h3>
            <hr />

            {/* Cake Tier */}
            <div className="base-cake-make-container">
                <h2>Cake Tier</h2>
                <div className="choice-container">
                    <div className="option">
                        <LazyLoadImage
                            className="choice"
                            src={SingleRound}
                            alt="round-cake"
                        />
                        <h5>Single</h5>
                    </div>
                    <div className="option">
                        <LazyLoadImage
                            className="choice"
                            src={MultipleRound}
                            alt="round-cake"
                        />
                        <h5>Multiple</h5>
                    </div>
                </div>
            </div>

            {/* Cake Shape */}
            <div className="base-cake-make-container">
                <h5>Cake Shape</h5>
                <div className="choice-container">
                    <div className="option">
                        <LazyLoadImage
                            className="choice"
                            src={SingleRound}
                            alt="round-cake"
                        />
                        <h5>Single</h5>
                    </div>
                    <div className="option">
                        <LazyLoadImage
                            className="choice"
                            src={SingleSheet}
                            alt="round-cake"
                        />
                        <h5>Sheet</h5>
                    </div>
                </div>
            </div>

            {/* Cake Size */}
            <div className="base-cake-make-container">
                <h5>Round Cake Size</h5>
                <div className="choice-container">
                    <div className="option">
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
        </section>
    );
};

export default CakeBase;

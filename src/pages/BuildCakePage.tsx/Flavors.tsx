//frameworks
import React from "react";

//styles
import "../../styles/BuildYourCake/Flavors.scss";

//data
import { Fillings, Frostings, MainFlavors } from "../../data/SweetsData";
import { SweetGenres } from "../../store/Enums";

const Flavors = () => {
    const renderSweetGenres = (genre: SweetGenres): JSX.Element => {
        switch (genre) {
            case SweetGenres.FLAVORS: {
                return (
                    <form action="">
                        <select name="cake-size" className="cake-size-dropdown">
                            {MainFlavors.map(({ id, name, price }) => {
                                if (id === 0) {
                                    return (
                                        <option key={id} defaultValue="">
                                            Choose One
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option
                                            key={id}
                                            value={name}
                                        >{`${name} ($${price})`}</option>
                                    );
                                }
                            })}
                        </select>
                    </form>
                );
            }
            case SweetGenres.FROSTINGS: {
                return (
                    <form action="">
                        <select name="cake-size" className="cake-size-dropdown">
                            {Frostings.map(({ id, name, price }) => {
                                if (id === 0) {
                                    return (
                                        <option key={name + id} defaultValue="">
                                            Choose One
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option
                                            key={name + id}
                                            value={name}
                                        >{`${name} ($${price})`}</option>
                                    );
                                }
                            })}
                        </select>
                    </form>
                );
            }
            case SweetGenres.FILLINGS: {
                return (
                    <form action="">
                        <select name="cake-size" className="cake-size-dropdown">
                            {Fillings.map(({ id, name, price }) => {
                                if (id === 0) {
                                    return (
                                        <option key={name + id} defaultValue="">
                                            Choose One
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option
                                            key={name + id}
                                            value={name}
                                        >{`${name} ($${price})`}</option>
                                    );
                                }
                            })}
                        </select>
                    </form>
                );
            }
            default: {
                return <div></div>;
            }
        }
    };
    return (
        <section className="custom-flavors-container">
            <h3>Customize Flavors</h3>
            <hr />
            {(Object.keys(SweetGenres) as Array<keyof typeof SweetGenres>).map(
                (key) => {
                    return (
                        <div
                            key={key}
                            id="custom-flavors"
                            className="cake-make-container"
                        >
                            <h5>
                                Main {SweetGenres[key].slice(0, -1)}
                                {}
                            </h5>
                            <div className="choice-container">
                                <div className="option">
                                    {renderSweetGenres(SweetGenres[key])}
                                </div>
                            </div>
                        </div>
                    );
                }
            )}
            <div id="fruits-section-container" className="cake-make-container">
                <h5>Add Fresh Fruit?</h5>
                <div id="fruit-section" className="choice-container">
                    <input
                        value="yes"
                        type="radio"
                        name="fruit"
                        id="fruit-input"
                    ></input>
                    <label htmlFor="fruit">Yes (Extra Cost*)</label>
                    <input
                        value="no"
                        type="radio"
                        name="fruit"
                        id="fruit-input"
                    ></input>
                    <label htmlFor="fruit">No</label>
                </div>
            </div>
            <div className="cake-make-container">
                <h5>Flavors Cost</h5>
                <div>$0.00</div>
            </div>
        </section>
    );
};

export default Flavors;

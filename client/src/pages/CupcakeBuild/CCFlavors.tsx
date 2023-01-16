//frameworks
import React from "react";

//styles
import "../../styles/CupcakeBuild/CCFlavors.scss";

//data
import { Frostings, MainFlavors } from "../../data/CakesData";
import { CupcakeGenres } from "../../store/Enums";

const CCFlavors = () => {
    const renderSweetGenres = (genre: CupcakeGenres): JSX.Element => {
        switch (genre) {
            case CupcakeGenres.FLAVORS: {
                return (
                    <form action="">
                        <select name="cake-size" className="ccf-dropdown">
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
            case CupcakeGenres.FROSTINGS: {
                return (
                    <form action="">
                        <select name="cake-size" className="ccf-dropdown">
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
            default: {
                return <div></div>;
            }
        }
    };
    return (
        <section className="ccf-container">
            <h3>Customize Flavors</h3>
            <hr />
            {(
                Object.keys(CupcakeGenres) as Array<keyof typeof CupcakeGenres>
            ).map((key) => {
                return (
                    <div
                        key={key}
                        id="ccf-custom-flavors"
                        className="ccf-make-container"
                    >
                        <h5 className="flavors-title">
                            Main {CupcakeGenres[key].slice(0, -1)}
                            {}
                        </h5>
                        <div className="ccf-choice-container">
                            <div>{renderSweetGenres(CupcakeGenres[key])}</div>
                        </div>
                    </div>
                );
            })}
            <div className="ccf-make-container">
                <h5 className="ccf-title">Cost</h5>
                <div>$0.00</div>
            </div>
        </section>
    );
};

export default CCFlavors;

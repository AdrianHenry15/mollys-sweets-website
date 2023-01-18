//frameworks
import React, { useState } from "react";

//styles
import "../../styles/CookieBuild/CookieFlavors.scss";

//data
import { Frostings, MainFlavors } from "../../data/CakesData";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import { inject, observer } from "mobx-react";

interface ICookieFlavorsProps {
    store?: GlobalStateStore;
}

const CookieFlavors: React.FC<ICookieFlavorsProps> = inject("store")(
    observer(({ store }: ICookieFlavorsProps) => {
        const [frosting, setFrosting] = useState(false);
        return (
            <section className="cookie-f-container">
                <h3>Customize Flavors</h3>
                <hr />

                <div
                    id="cookie-f-custom-flavors"
                    className="cookie-f-make-container"
                >
                    <h5 className="flavors-title">Main Flavor</h5>
                    <div className="cookie-f-choice-container">
                        <div>
                            <form action="">
                                <select
                                    name="cake-size"
                                    className="cookie-f-dropdown"
                                >
                                    {MainFlavors.map(({ id, name, price }) => {
                                        if (id === 0) {
                                            return (
                                                <option
                                                    key={id}
                                                    defaultValue=""
                                                >
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
                        </div>
                    </div>
                </div>
                <div className="cookie-f-make-container">
                    <h5 className="flavors-title">Would You Like Frosting?</h5>
                    <form action="">
                        <div className="ccc-choice-container">
                            <input
                                type="radio"
                                value="yes"
                                name="cookie-frosting"
                                onChange={(e) => setFrosting(true)}
                            />
                            <label htmlFor="cookie-frosting">Yes</label>
                            <input
                                type="radio"
                                value="no"
                                name="cookie-frosting"
                                onChange={(e) => setFrosting(false)}
                            />
                            <label htmlFor="cookie-frosting">No</label>
                        </div>
                    </form>
                </div>
                {frosting && (
                    <div
                        id="cookie-f-custom-flavors"
                        className="cookie-f-make-container"
                    >
                        <h5 className="flavors-title">Frosting</h5>
                        <div className="cookie-f-choice-container">
                            <div>
                                <form action="">
                                    <select
                                        name="cake-size"
                                        className="cookie-f-dropdown"
                                    >
                                        {Frostings.map(
                                            ({ id, name, price }) => {
                                                if (id === 0) {
                                                    return (
                                                        <option
                                                            key={id}
                                                            defaultValue=""
                                                        >
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
                                            }
                                        )}
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                <div className="cookie-f-make-container">
                    <h5 className="cookie-f-title">Cost</h5>
                    <div>$0.00</div>
                </div>
            </section>
        );
    })
);

export default CookieFlavors;

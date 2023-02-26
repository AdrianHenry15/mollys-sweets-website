// External Dependencies
import React from "react";

//styles
import "./Flavors.scss";
import "../../GlobalStyles.scss";

//data
import { ProductCategories } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { action } from "mobx";

//store

interface ICakeFlavorsProps {
    store?: GlobalStateStore;
}

interface ICakeFlavorsState {
    fruit: boolean;
    flavor: [];
}

@inject("store")
@observer
class Flavors extends React.Component<ICakeFlavorsProps, ICakeFlavorsState> {
    constructor(props: ICakeFlavorsProps) {
        super(props);

        this.state = {
            fruit: false,
            flavor: [],
        };
    }

    private getFlavorsInfo = action(
        (
            e: React.ChangeEvent<HTMLTextAreaElement>,
            type: "flavor" | "frosting" | "filling" | "fruit"
        ) => {
            this.props.store!.CakeStore.flavors[type] = e.target.value;
        }
    );

    private setFruit = (hasFruit: boolean) => {
        this.setState({
            fruit: hasFruit,
        });
    };

    private catchError = (): string => {
        const { category } = this.props.store!.CategoryStore;
        const { flavor, frosting, filling } =
            this.props.store!.CakeStore.flavors;
        if (
            (category === ProductCategories.CAKES && flavor === "") ||
            frosting === "" ||
            filling === ""
        ) {
            return "Please Finish Customizing Your Flavors";
        } else {
            return "";
        }
    };
    // main render
    render() {
        return (
            <section className="flavors-custom-flavors-container">
                <h3>Customize Flavors</h3>
                <hr />
                <div
                    id="flavors-custom-flavors"
                    className="flavors-cake-make-container"
                >
                    <h5 className="flavors-title">Main Flavor</h5>
                    <div className="flavors-choice-container">
                        <div className="flavors-option">
                            <textarea
                                className="flavor-textarea"
                                placeholder="Vanilla, Almond, Carrot, etc."
                                onChange={(e) =>
                                    this.getFlavorsInfo(e, "flavor")
                                }
                            />
                        </div>
                    </div>
                </div>
                <div
                    id="flavors-custom-flavors"
                    className="flavors-cake-make-container"
                >
                    <h5 className="flavors-title">Main Frosting</h5>
                    <div className="flavors-choice-container">
                        <div className="flavors-option">
                            <textarea
                                className="flavor-textarea"
                                placeholder="Vanilla Buttercream, Chocolate Buttercream, etc."
                                onChange={(e) =>
                                    this.getFlavorsInfo(e, "frosting")
                                }
                            />
                        </div>
                    </div>
                </div>
                <div
                    id="flavors-custom-flavors"
                    className="flavors-cake-make-container"
                >
                    <h5 className="flavors-title">Main Filling</h5>
                    <div className="flavors-choice-container">
                        <div className="flavors-option">
                            <textarea
                                className="flavor-textarea"
                                placeholder="Blueberry Jam, Ganache, etc."
                                onChange={(e) =>
                                    this.getFlavorsInfo(e, "filling")
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Fresh Fruit */}
                <div
                    id="flavors-fruits-section-container"
                    className="flavors-cake-make-container"
                >
                    <h5 className="flavors-title">Add Fresh Fruit?</h5>
                    <div
                        id="flavors-fruit-section"
                        className="flavors-choice-container"
                    >
                        <input
                            value="yes"
                            type="radio"
                            name="hasFruit"
                            id="flavors-fruit-input"
                            onClick={() => this.setFruit(true)}
                        ></input>
                        <label htmlFor="fruit">Yes (Extra Cost*)</label>
                        <input
                            value="no"
                            type="radio"
                            name="hasFruit"
                            id="flavors-fruit-input"
                            onClick={() => this.setFruit(false)}
                        ></input>
                        <label htmlFor="fruit">No</label>
                    </div>
                </div>
                {this.state.fruit && (
                    <div
                        id="flavors-custom-flavors"
                        className="flavors-cake-make-container"
                    >
                        <h5 className="flavors-title">What Fruits?</h5>
                        <div className="flavors-choice-container">
                            <div className="flavors-option">
                                <textarea
                                    onChange={(e) =>
                                        this.getFlavorsInfo(e, "fruit")
                                    }
                                    name="fruit"
                                    className="flavors-cake-size-dropdown"
                                    placeholder="Bananas, Apples, Strawberries, etc."
                                />
                            </div>
                        </div>
                    </div>
                )}
                <aside>
                    <i className="error-text">{this.catchError()}</i>
                </aside>
            </section>
        );
    }
}

export default Flavors;

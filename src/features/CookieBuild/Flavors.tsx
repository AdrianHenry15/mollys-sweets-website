// External Dependencies
import React from "react";
import { inject, observer } from "mobx-react";

//styles
import "./Flavors.scss";

//stores
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { action } from "mobx";
import { ProductCategories } from "../../store/constants/Enums";

interface ICookieFlavorsProps {
    store?: GlobalStateStore;
}

interface ICookieFlavorsState {
    frosting: string;
}

@inject("store")
@observer
class Flavors extends React.Component<
    ICookieFlavorsProps,
    ICookieFlavorsState
> {
    constructor(props: ICookieFlavorsProps) {
        super(props);

        this.state = {
            frosting: "",
        };
    }
    private getFlavorInfo = action(
        (
            e: React.ChangeEvent<HTMLTextAreaElement>,
            type: "flavor" | "frosting"
        ) => {
            this.props.store!.CookieStore.flavors[type] = e.target.value;
        }
    );

    private getFrosting = (option: "yes" | "no") => {
        this.setState({
            frosting: option,
        });
    };

    private catchError = () => {
        const { category } = this.props.store!.CategoryStore;
        const { flavor } = this.props.store!.CookieStore.flavors;
        if (category === ProductCategories.COOKIES && flavor === "")
            return "Please Finish Customizing Your Flavors";
    };

    //main
    render() {
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
                            <textarea
                                onChange={(e) =>
                                    this.getFlavorInfo(e, "flavor")
                                }
                                name="cake-size"
                                className="cookie-f-dropdown"
                                placeholder="Vanilla, Almond, Carrot, etc."
                            />
                        </div>
                    </div>
                </div>
                <div className="cookie-f-make-container">
                    <h5 className="flavors-title">Would You Like Frosting?</h5>
                    <div className="ccc-choice-container">
                        <input
                            type="radio"
                            value="yes"
                            name="cookie-frosting"
                            onChange={() => this.getFrosting("yes")}
                        />
                        <label htmlFor="cookie-frosting">Yes</label>
                        <input
                            type="radio"
                            value="no"
                            name="cookie-frosting"
                            onChange={() => this.getFrosting("no")}
                        />
                        <label htmlFor="cookie-frosting">No</label>
                    </div>
                </div>
                {this.state.frosting === "yes" && (
                    <div
                        id="cookie-f-custom-flavors"
                        className="cookie-f-make-container"
                    >
                        <h5 className="flavors-title">Frosting</h5>
                        <div className="cookie-f-choice-container">
                            <div>
                                <textarea
                                    onChange={(e) =>
                                        this.getFlavorInfo(e, "frosting")
                                    }
                                    name="cake-size"
                                    className="cookie-f-dropdown"
                                    placeholder="Vanilla Buttercream, Chocolate Buttercream, etc."
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

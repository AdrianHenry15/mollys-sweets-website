//frameworks
import React from "react";

//styles
import "./Flavors.scss";

//stores
import { ProductCategories } from "../../store/constants/Enums";
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";

interface ICCFlavorsProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Flavors extends React.Component<ICCFlavorsProps, {}> {
    //functions

    private getFlavorInfo = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
        type: "flavor" | "frosting"
    ) => {
        this.props.store!.CupcakeStore.flavors[type] = e.target.value;
    };

    private catchError = (): string => {
        const { category } = this.props.store!.CategoryStore;
        const { flavor, frosting } = this.props.store!.CupcakeStore.flavors;

        if (
            (category === ProductCategories.CUPCAKES && flavor === "") ||
            frosting === ""
        ) {
            return "Please Finish Customizing Your Flavors";
        } else {
            return "";
        }
    };
    render() {
        return (
            <section className="ccf-container">
                <h3>Customize Flavors</h3>
                <hr />
                <div id="ccf-custom-flavors" className="ccf-make-container">
                    <h5 className="flavors-title">Main Flavor</h5>
                    <div className="ccf-choice-container">
                        <div>
                            <textarea
                                placeholder="Vanilla, Almond, Carrot, etc."
                                onChange={(e) =>
                                    this.getFlavorInfo(e, "flavor")
                                }
                                name="cake-size"
                                className="ccf-dropdown"
                            />
                        </div>
                    </div>
                </div>
                <div id="ccf-custom-flavors" className="ccf-make-container">
                    <h5 className="flavors-title">Main Frosting</h5>
                    <div className="ccf-choice-container">
                        <div>
                            <textarea
                                placeholder="Vanilla Buttercream, Chocolate Buttercream, etc."
                                onChange={(e) =>
                                    this.getFlavorInfo(e, "flavor")
                                }
                                name="cake-size"
                                className="ccf-dropdown"
                            />
                        </div>
                    </div>
                </div>

                <aside>
                    <i className="error-text">{this.catchError()}</i>
                </aside>
            </section>
        );
    }
}

export default Flavors;

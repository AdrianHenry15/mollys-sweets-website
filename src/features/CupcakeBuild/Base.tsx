// styles
import "./Base.scss";

//frameworks
import React from "react";

//store
import { ProductCategories, ProductSizes } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { action } from "mobx";

interface IBaseProps {
    store?: GlobalStateStore;
}

// interface ICCCountState {}

@inject("store")
@observer
class Base extends React.Component<IBaseProps, {}> {
    // functions
    private getCupcakeQuantityInfo = action(
        (e: React.ChangeEvent<HTMLTextAreaElement>): string => {
            let select: HTMLTextAreaElement = e.target;
            let value: string = select.value;
            return (this.props.store!.CupcakeStore.base.quantity = value);
        }
    );

    private getCupcakeSize = action(
        (e: React.ChangeEvent<HTMLInputElement>): ProductSizes => {
            let select: HTMLInputElement = e.target;
            let value: string = select.value;
            return (this.props.store!.CupcakeStore.base.size =
                value as ProductSizes);
        }
    );

    private catchError = (): string => {
        const { category } = this.props.store!.CategoryStore;
        const { size, quantity } = this.props.store!.CupcakeStore.base;

        if (
            (category === ProductCategories.CUPCAKES && size === "") ||
            quantity === ""
        ) {
            return "Please Finish The Cupcake Base Form";
        } else {
            return "";
        }
    };
    render() {
        // store variables
        const cupcakeSize = this.props.store!.CupcakeStore.base.size;

        return (
            <section className="ccc-count-container">
                <h3>Choose Cupcakes</h3>
                <hr />

                {/* What kind of Cupcakes */}
                <div className="ccc-kind-container">
                    <h5 className="ccc-title">What Kind Of Cupcakes?</h5>
                    <div className="ccc-choice-container">
                        <input
                            value={ProductSizes.REGULAR}
                            type="radio"
                            name="fruit"
                            onChange={(e) => this.getCupcakeSize(e)}
                        ></input>
                        <label htmlFor="fruit">Regular</label>
                        <input
                            value={ProductSizes.MINI}
                            type="radio"
                            name="fruit"
                            onChange={(e) => this.getCupcakeSize(e)}
                        ></input>
                        <label htmlFor="fruit">Mini</label>
                    </div>
                </div>

                {/* How many cupcakes */}
                <div className="ccc-make-container">
                    <h5 className="ccc-title">
                        How Many
                        {cupcakeSize === ProductSizes.REGULAR
                            ? " Regular"
                            : " Mini"}{" "}
                        Cupcakes
                    </h5>
                    <div className="ccc-choice-container">
                        <div className="ccc-option">
                            <textarea
                                onChange={(e) => this.getCupcakeQuantityInfo(e)}
                                name="cake-size"
                                className="ccc-dropdown"
                                placeholder="Amount Of Cupcakes..."
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

export default Base;

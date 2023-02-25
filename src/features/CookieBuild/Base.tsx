// styles
import "./Base.scss";

// External Dependencies
import React from "react";

//store
import { ProductCategories, ProductSizes } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { ProductData } from "../../data/Data";
import { action } from "mobx";

interface IBaseProps {
    store?: GlobalStateStore;
}

interface IBaseState {
    cookieSize: string;
}

@inject("store")
@observer
class Base extends React.Component<IBaseProps, IBaseState> {
    constructor(props: IBaseProps) {
        super(props);

        this.state = {
            cookieSize: "",
        };
    }

    // functions
    private getCookieQuantity = action(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            let select: HTMLTextAreaElement = e.target;
            let value: string = select.value;

            this.props.store!.CookieStore.base.quantity = value;
        }
    );
    private getCookieSize = action((e: React.ChangeEvent<HTMLInputElement>) => {
        let select: HTMLInputElement = e.target;
        let value: string = select.value;

        this.props.store!.CookieStore.base.size = value as ProductSizes;
    });

    private catchError = (): string => {
        const { category } = this.props.store!.CategoryStore;
        const { size, quantity } = this.props.store!.CookieStore.base;
        console.log(size, quantity);

        if (
            (category === ProductCategories.COOKIES && size === "") ||
            quantity === ""
        ) {
            return "Please Finish The Cookie Base Form";
        } else {
            return "";
        }
    };
    render() {
        // store variables
        const { size } = this.props.store!.CookieStore.base;
        return (
            <section className="cookie-count-container">
                <h3>Choose Cookies</h3>
                <hr />

                {/* What kind of Cupcakes */}
                <div className="cookie-kind-container">
                    <h5 className="cookie-title">What Kind Of Cookies?</h5>
                    <div className="cookie-choice-container">
                        <input
                            value={ProductSizes.REGULAR}
                            type="radio"
                            name="fruit"
                            onChange={(e) => this.getCookieSize(e)}
                        ></input>
                        <label htmlFor="fruit">Regular</label>
                        <input
                            defaultValue={ProductSizes.MINI}
                            type="radio"
                            name="fruit"
                            onChange={(e) => this.getCookieSize(e)}
                        ></input>
                        <label htmlFor="fruit">Mini</label>
                    </div>
                </div>

                {/* How many cupcakes */}
                <div className="cookie-make-container">
                    <h5 className="cookie-title">How Many Cookies</h5>
                    <div className="cookie-choice-container">
                        <div className="cookie-option">
                            <textarea
                                onChange={(e) => this.getCookieQuantity(e)}
                                name="cake-size"
                                className="cookie-dropdown"
                                placeholder="Amount Of Cookies..."
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

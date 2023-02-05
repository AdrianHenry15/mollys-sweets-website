// styles
import "../../styles/CartStyles/Cart.scss";
// frame
import React from "react";
//store
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//components
import Order from "../Orders/Order";
import EmptyCart from "./EmptyCart";
import TotalContainer from "./TotalContainer";

interface ICartProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Cart extends React.Component<ICartProps> {
    constructor(props: ICartProps) {
        super(props);
    }
    //main
    render() {
        //store variables
        const emptyCartState = this.props.store!.CartStore.cartEmpty;
        return (
            <section className="cart-main">
                <EmptyCart />
                {!emptyCartState && (
                    <div className="cart-filled-container">
                        <div className="cart-container">
                            <h1 className="filled-cart-label">Your Cart</h1>
                            <Order />
                        </div>
                        <TotalContainer />
                    </div>
                )}
            </section>
        );
    }
}

export default Cart;

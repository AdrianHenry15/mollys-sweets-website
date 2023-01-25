//store
import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";

// styles
import "../styles/Order.scss";

interface IOrderProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Order extends React.Component<IOrderProps, {}> {
    constructor(props: IOrderProps) {
        super(props);
    }
    //main
    render() {
        return (
            <section className="main-order-container">
                <div className="product-item-container">
                    <div className="product-icon"></div>
                    <div className="product-info">
                        <span className="product-title"></span>
                        <div className="info-btn remove-btn"></div>
                        <div className="info-btn edit-btn"></div>
                        <div className="info-btn view-details-btn"></div>
                    </div>
                    <div className="product-price"></div>
                </div>
            </section>
        );
    }
}

export default Order;

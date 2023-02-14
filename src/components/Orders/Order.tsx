import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { ContactDetails } from "./Features/ContactDetails";
import RequestDetails from "./Features/RequestDetails";

// styles
import "./Order.scss";

//icons

// import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
// import { RxCookie as CookieIcon } from "react-icons/rx";

interface IOrderProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Order extends React.Component<IOrderProps, {}> {
    //main
    render() {
        return (
            <section className="order-container">
                <ContactDetails />
                <RequestDetails />
            </section>
        );
    }
}

export default Order;

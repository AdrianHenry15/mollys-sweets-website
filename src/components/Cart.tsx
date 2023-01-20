import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";

interface ICartProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Cart extends React.Component<ICartProps, {}> {
    //main
    render() {
        return <div></div>;
    }
}

export default Cart;

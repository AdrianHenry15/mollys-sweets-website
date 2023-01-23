//store
import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";

interface IOrderProps {
    store?: GlobalStateStore;
    cartState: boolean;
}

interface IOrderState {}

@inject("store")
@observer
class Order extends React.Component<IOrderProps, {}> {
    constructor(props: IOrderProps) {
        super(props);
    }
    //main
    render() {
        return <div></div>;
    }
}

//frameworks
import { inject, observer } from "mobx-react";
import React from "react";

//store
import { ProductCategories } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//styles
import "./Details.scss";
import "react-datepicker/dist/react-datepicker.css";
import Details from "../../components/Details";

interface ICupcakeDetailsProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class CupcakeDetails extends React.Component<ICupcakeDetailsProps> {
    render() {
        return <Details category={ProductCategories.CUPCAKES} />;
    }
}

export default CupcakeDetails;

//frameworks
import { inject, observer } from "mobx-react";
import React from "react";

//store
import { ProductCategories } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//styles
import "../../styles/CupcakeBuildStyles/CCDetails.scss";
import "react-datepicker/dist/react-datepicker.css";
import Details from "../../components/Details";

interface ICCDetailsProps {
    store?: GlobalStateStore;
}

interface ICCDetailsState {
    arrivalDate: Date;
    occasionDate: Date;
}

@inject("store")
@observer
class CCDetails extends React.Component<ICCDetailsProps, ICCDetailsState> {
    constructor(props: ICCDetailsProps) {
        super(props);

        this.state = {
            arrivalDate: new Date(),
            occasionDate: new Date(),
        };
    }
    render() {
        return <Details category={ProductCategories.CUPCAKES} />;
    }
}

export default CCDetails;

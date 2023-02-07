// External Dependencies
import React from "react";

//store
import { inject, observer } from "mobx-react";
import { ProductCategories } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//styles
import "../../styles/CookieBuildStyles/CookieDetails.scss";
import "react-datepicker/dist/react-datepicker.css";
import Details from "../../components/Details";

interface ICookieDetailsProps {
    store?: GlobalStateStore;
}

interface ICookieDetailsState {
    arrivalDate: Date;
    occasionDate: Date;
}

@inject("store")
@observer
class CookieDetails extends React.Component<
    ICookieDetailsProps,
    ICookieDetailsState
> {
    constructor(props: ICookieDetailsProps) {
        super(props);

        this.state = {
            arrivalDate: new Date(),
            occasionDate: new Date(),
        };
    }

    render() {
        return <Details category={ProductCategories.COOKIES} />;
    }
}

export default CookieDetails;

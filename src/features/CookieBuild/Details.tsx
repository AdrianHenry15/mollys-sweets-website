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

@inject("store")
@observer
class CookieDetails extends React.Component<ICookieDetailsProps> {
    render() {
        return <Details category={ProductCategories.COOKIES} />;
    }
}

export default CookieDetails;

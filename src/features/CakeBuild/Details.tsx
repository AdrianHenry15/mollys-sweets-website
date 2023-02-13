// External Dependencies
import { inject, observer } from "mobx-react";
import React from "react";
import { ProductCategories } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//styles
import "../../styles/CakeBuildStyles/Details.scss";
import "react-datepicker/dist/react-datepicker.css";
import Details from "../../components/Details";

interface ICakeDetailsProps {
    store?: GlobalStateStore;
}
interface ICakeDetailsState {
    arrivalDate: Date;
    occasionDate: Date;
}
@inject("store")
@observer
class CakeDetails extends React.Component<
    ICakeDetailsProps,
    ICakeDetailsState
> {
    render() {
        return (
            <>
                <Details category={ProductCategories.CAKES} />
            </>
        );
    }
}

export default CakeDetails;

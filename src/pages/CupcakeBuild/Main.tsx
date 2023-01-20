//styles
import "../../styles/CupcakeBuild/Main.scss";
//frameworks
import React from "react";
// components
import CCCount from "./CCCount";
import CCFlavors from "./CCFlavors";
import CCDetails from "./CCDetails";
import CCTotalCost from "./CCTotalCost";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";

interface IChooseYourCupcakesProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class ChooseYourCupcakes extends React.Component<IChooseYourCupcakesProps, {}> {
    render() {
        return (
            <section className="main-build-cupcake-wrapper">
                <div className="main-build-cupcake-container">
                    {/* <OptionsOverview /> */}
                    <section className="main-customize-cupcake-container">
                        <aside className="main-cc-note">
                            <p>
                                <strong>NOTE: </strong>
                                <i>
                                    The form below is only to request a custom
                                    cake quote. Final cake order details will
                                    still need further discussion. All prices
                                    are subject to change without further
                                    notice.
                                </i>
                            </p>
                        </aside>
                        <section className="main-create-cupcake-container">
                            <CCCount />
                        </section>
                        <section className="main-create-cupcake-container">
                            <CCFlavors />
                        </section>
                        <section className="main-create-cupcake-container">
                            <CCDetails />
                        </section>
                        <section className="main-create-cupcake-container">
                            <CCTotalCost />
                        </section>
                    </section>
                </div>
            </section>
        );
    }
}

export default ChooseYourCupcakes;

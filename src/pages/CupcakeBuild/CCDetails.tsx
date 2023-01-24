//frameworks
import { inject, observer } from "mobx-react";
import React from "react";

//store
import { CakeOccasion, CakeRecipient } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//styles
import "../../styles/CupcakeBuild/CCDetails.scss";

interface ICCDetailsProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class CCDetails extends React.Component<ICCDetailsProps, {}> {
    render() {
        //store methods
        const handleCupcakeOccasion =
            this.props.store!.CupcakeActions.cupcakeDetailsActions
                .handleCupcakeOccasion;
        const handleCupcakeRecipient =
            this.props.store!.CupcakeActions.cupcakeDetailsActions
                .handleCupcakeRecipient;
        const handlePreferredCupcakeColors =
            this.props.store!.CupcakeActions.cupcakeDetailsActions
                .handlePreferredCupcakeColors;
        const handleCupcakePhotoExample =
            this.props.store!.CupcakeActions.cupcakeDetailsActions
                .handleCupcakePhotoExample;
        const handleCupcakeLinkExample =
            this.props.store!.CupcakeActions.cupcakeDetailsActions
                .handleCupcakeLinkExample;
        const handleCupcakeAdditionalDetails =
            this.props.store!.CupcakeActions.cupcakeDetailsActions
                .handleCupcakeAdditionalDetails;
        return (
            <section className="ccd-container">
                <h3>Cupcake Details</h3>
                <hr />
                <div className="ccd-make-container">
                    <h5 className="ccd-title">What Are These Cupcakes For?</h5>
                    <form action="">
                        <select
                            onChange={(e) => handleCupcakeOccasion(e)}
                            className="ccd-dropdown"
                            name="cake-size-dropdown"
                        >
                            {(
                                Object.keys(CakeOccasion) as Array<
                                    keyof typeof CakeOccasion
                                >
                            ).map((key) => {
                                if (CakeOccasion[key] === CakeOccasion.NONE) {
                                    return (
                                        <option key={key} value="">
                                            Choose One
                                        </option>
                                    );
                                } else {
                                    return (
                                        <option
                                            key={key}
                                            value={CakeOccasion[key]}
                                        >
                                            {CakeOccasion[key]}
                                        </option>
                                    );
                                }
                            })}
                        </select>
                    </form>
                </div>

                <div id="ccd-checkbox-wrapper" className="ccd-make-container">
                    <h5 className="ccd-title">Who Are These Cupcakes For?</h5>
                    <div className="ccd-checkbox-container">
                        {(
                            Object.keys(CakeRecipient) as Array<
                                keyof typeof CakeRecipient
                            >
                        ).map((key) => {
                            return (
                                <div key={key} className="ccd-checkbox">
                                    <input
                                        onChange={(e) =>
                                            handleCupcakeRecipient(e)
                                        }
                                        type="checkbox"
                                        name="cake-recipient"
                                        value={CakeRecipient[key]}
                                    />
                                    <label htmlFor="whos-cake">
                                        {CakeRecipient[key]}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="ccd-make-container">
                    <h5 className="ccd-title">
                        List Preferred Colors For Cupcakes
                    </h5>
                    <div className="ccd-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) =>
                                    handlePreferredCupcakeColors(e)
                                }
                                className="ccd-dropdown"
                                name="cake-colors"
                                placeholder="Enter Colors Here..."
                            />
                        </form>
                    </div>
                </div>
                <div
                    id="ccd-photo-example-container"
                    className="ccd-make-container"
                >
                    <h5 className="ccd-title">Photo Example Of Cupcakes</h5>
                    <div className="ccd-textbox-container">
                        <form action="">
                            <input
                                onChange={(e) => handleCupcakePhotoExample(e)}
                                className="ccd-file-option"
                                type="file"
                                name="cake-colors"
                                placeholder="Enter Inscription Here..."
                                maxLength={80}
                            />
                            <aside>
                                Upload any photo example <br />
                                of a cupcake design that you would like to copy
                                for your cupcakes. <br />
                                You may also send a link in the field below.
                            </aside>
                            <textarea
                                onChange={(e) => handleCupcakeLinkExample(e)}
                                name="photo-link"
                                id="ccd-photo-link"
                                placeholder="Enter Link Of Cupcake Design Example Here..."
                                maxLength={450}
                            ></textarea>
                        </form>
                    </div>
                </div>
                <div className="ccd-make-container">
                    <h5 className="ccd-title">
                        Additional Design/Theme Details
                    </h5>
                    <div className="ccd-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) =>
                                    handleCupcakeAdditionalDetails(e)
                                }
                                name="extra-details"
                                id="ccd-extra-details"
                                placeholder="Enter Details Here..."
                            ></textarea>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default CCDetails;

//frameworks
import { inject, observer } from "mobx-react";
import React from "react";
import { CakeOccasion, CakeRecipient } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//styles
import "../../styles/CakeBuild/Details.scss";

interface ICakeDetailsProps {
    store?: GlobalStateStore;
}
@inject("store")
@observer
class CakeDetails extends React.Component<ICakeDetailsProps, {}> {
    render() {
        //actions
        const handleCakeOccasion =
            this.props.store!.CakeActions.cakeDetailsActions.handleCakeOccasion;
        const handleCakeRecipient =
            this.props.store!.CakeActions.cakeDetailsActions
                .handleCakeRecipient;
        const handlePreferredCakeColor =
            this.props.store!.CakeActions.cakeDetailsActions
                .handlePreferredCakeColors;
        const handleCakeInscription =
            this.props.store!.CakeActions.cakeDetailsActions
                .handleCakeInscription;
        const handleCakePhotoExample =
            this.props.store!.CakeActions.cakeDetailsActions
                .handleCakePhotoExample;
        const handleCakeLinkExample =
            this.props.store!.CakeActions.cakeDetailsActions
                .handleCakeLinkExample;
        const handleCakeAdditionalDetails =
            this.props.store!.CakeActions.cakeDetailsActions
                .handleCakeAdditionalDetails;
        //main
        return (
            <section className="details-cake-details-container">
                <h3>Cake Details</h3>
                <hr />
                <div className="details-cake-make-container">
                    <h5 className="details-title">What Is The Cake For?</h5>
                    <form action="">
                        <select
                            onChange={(e) => handleCakeOccasion(e)}
                            className="details-cake-size-dropdown"
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

                <div
                    id="details-checkbox-wrapper"
                    className="details-cake-make-container"
                >
                    <h5 className="details-title">Who Is The Cake For?</h5>
                    <div className="details-checkbox-container">
                        {(
                            Object.keys(CakeRecipient) as Array<
                                keyof typeof CakeRecipient
                            >
                        ).map((key) => {
                            return (
                                <div key={key} className="details-checkbox">
                                    <input
                                        onChange={(e) => handleCakeRecipient(e)}
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
                <div className="details-cake-make-container">
                    <h5 className="details-title">
                        List Preferred Colors For Cake
                    </h5>
                    <div className="details-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => handlePreferredCakeColor(e)}
                                className="details-cake-size-dropdown"
                                name="cake-colors"
                                placeholder="Enter Colors Here..."
                            />
                        </form>
                    </div>
                </div>
                <div
                    id="details-cake-inscription-container"
                    className="details-cake-make-container"
                >
                    <h5 className="details-title">
                        Write Cake Inscription (If any)
                    </h5>
                    <div className="details-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => handleCakeInscription(e)}
                                className="details-cake-size-dropdown"
                                name="cake-colors"
                                placeholder="Enter Inscription Here..."
                                maxLength={80}
                            />
                        </form>
                    </div>
                </div>
                <div
                    id="details-photo-example-container"
                    className="details-cake-make-container"
                >
                    <h5 className="details-title">Photo Example Of Cake</h5>
                    <div className="details-textbox-container">
                        <form action="">
                            <input
                                className="details-file-option"
                                type="file"
                                name="cake-colors"
                                placeholder="Enter Inscription Here..."
                                maxLength={80}
                                onChange={(e) => handleCakePhotoExample(e)}
                            />
                            <aside>
                                Upload any photo example <br />
                                of a cake design that you would like to copy for
                                your cake. <br />
                                You may also send a link in the field below.
                            </aside>
                            <textarea
                                onChange={(e) => handleCakeLinkExample(e)}
                                name="photo-link"
                                id="details-photo-link"
                                placeholder="Enter Link Of Cake Design Example Here..."
                                maxLength={450}
                            ></textarea>
                        </form>
                    </div>
                </div>
                <div
                    id="details-cake-inscription-container"
                    className="details-cake-make-container"
                >
                    <h5 className="details-title">
                        Additional Design/Theme Details
                    </h5>
                    <div className="details-textbox-container">
                        <form action="">
                            <textarea
                                onChange={(e) => handleCakeAdditionalDetails(e)}
                                name="extra-details"
                                id="details-extra-details"
                                placeholder="Enter Details Here..."
                            ></textarea>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default CakeDetails;

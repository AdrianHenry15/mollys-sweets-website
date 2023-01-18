//frameworks
import { inject, observer, Observer } from "mobx-react";
import React from "react";
import { CakeOccasion, CakeRecipient } from "../../stateStore/constants/Enums";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";

//styles
import "../../styles/CupcakeBuild/CCDetails.scss";

interface ICCDetailsProps {
    store?: GlobalStateStore;
}

const CCDetails: React.FC<ICCDetailsProps> = inject("store")(
    observer(({ store }: ICCDetailsProps) => {
        return (
            <section className="ccd-container">
                <h3>Cupcake Details</h3>
                <hr />
                <div className="ccd-make-container">
                    <h5 className="ccd-title">What Are These Cupcakes For?</h5>
                    <form action="">
                        <select
                            className="ccd-dropdown"
                            name="cake-size-dropdown"
                        >
                            {(
                                Object.keys(CakeOccasion) as Array<
                                    keyof typeof CakeOccasion
                                >
                            ).map((key) => {
                                if (CakeOccasion[key] === CakeOccasion.NONE) {
                                    return <option value="">Choose One</option>;
                                } else {
                                    return (
                                        <option value={CakeOccasion[key]}>
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
                                <div className="ccd-checkbox">
                                    <input
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
                                name="extra-details"
                                id="ccd-extra-details"
                                placeholder="Enter Details Here..."
                            ></textarea>
                        </form>
                    </div>
                </div>
                <div className="ccd-make-container">
                    <h5 className="ccd-title">Details Cost</h5>
                    <div>$0.00</div>
                </div>
            </section>
        );
    })
);

export default CCDetails;

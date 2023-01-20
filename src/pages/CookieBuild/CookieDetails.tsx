//frameworks
import React from "react";

//store
import { inject, observer } from "mobx-react";
import { CakeOccasion, CakeRecipient } from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";

//styles
import "../../styles/CookieBuild/CookieDetails.scss";

interface ICookieDetailsProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class CookieDetails extends React.Component<ICookieDetailsProps, {}> {
    render() {
        return (
            <section className="cookie-d-container">
                <h3>Cookie Details</h3>
                <hr />
                <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">
                        What Are These Cookies For?
                    </h5>
                    <form action="">
                        <select
                            className="cookie-d-dropdown"
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

                <div
                    id="cookie-d-checkbox-wrapper"
                    className="cookie-d-make-container"
                >
                    <h5 className="cookie-d-title">
                        Who Are These Cookies For?
                    </h5>
                    <div className="cookie-d-checkbox-container">
                        {(
                            Object.keys(CakeRecipient) as Array<
                                keyof typeof CakeRecipient
                            >
                        ).map((key) => {
                            return (
                                <div className="cookie-d-checkbox">
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
                <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">
                        List Preferred Colors For Cookies
                    </h5>
                    <div className="cookie-d-textbox-container">
                        <form action="">
                            <textarea
                                className="cookie-d-dropdown"
                                name="cake-colors"
                                placeholder="Enter Colors Here..."
                            />
                        </form>
                    </div>
                </div>
                <div
                    id="cookie-d-photo-example-container"
                    className="cookie-d-make-container"
                >
                    <h5 className="cookie-d-title">Photo Example Of Cookies</h5>
                    <div className="cookie-d-textbox-container">
                        <form action="">
                            <input
                                className="cookie-d-file-option"
                                type="file"
                                name="cake-colors"
                                placeholder="Enter Inscription Here..."
                                maxLength={80}
                            />
                            <aside>
                                Upload any photo example <br />
                                of a cookie design that you would like to copy
                                for your cookies. <br />
                                You may also send a link in the field below.
                            </aside>
                            <textarea
                                name="photo-link"
                                id="cookie-d-photo-link"
                                placeholder="Enter Link Of Cookie Design Example Here..."
                                maxLength={450}
                            ></textarea>
                        </form>
                    </div>
                </div>
                <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">
                        Additional Design/Theme Details
                    </h5>
                    <div className="cookie-d-textbox-container">
                        <form action="">
                            <textarea
                                name="extra-details"
                                id="cookie-d-extra-details"
                                placeholder="Enter Details Here..."
                            ></textarea>
                        </form>
                    </div>
                </div>
                <div className="cookie-d-make-container">
                    <h5 className="cookie-d-title">Details Cost</h5>
                    <div>$0.00</div>
                </div>
            </section>
        );
    }
}

export default CookieDetails;

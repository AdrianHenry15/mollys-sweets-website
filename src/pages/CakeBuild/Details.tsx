//frameworks
import React from "react";

//styles
import "../../styles/CakeBuild/Details.scss";

const CakeDetails = () => {
    return (
        <section className="details-cake-details-container">
            <h3>Cake Details</h3>
            <hr />
            <div className="details-cake-make-container">
                <h5 className="details-title">What Is The Cake For?</h5>
                <form action="">
                    <select
                        className="details-cake-size-dropdown"
                        name="cake-size-dropdown"
                    >
                        <option value="">Birthday</option>
                        <option value="">Baby Shower</option>
                        <option value="">Graduation</option>
                        <option value="">Anniversary</option>
                        <option value="">Other</option>
                    </select>
                </form>
            </div>

            <div
                id="details-checkbox-wrapper"
                className="details-cake-make-container"
            >
                <h5 className="details-title">Who Is The Cake For?</h5>
                <div className="details-checkbox-container">
                    <div className="details-checkbox">
                        <input type="checkbox" name="whos-cake" value="Male" />
                        <label htmlFor="whos-cake">Male</label>
                    </div>
                    <div className="details-checkbox">
                        <input
                            type="checkbox"
                            name="whos-cake"
                            value="Female"
                        />
                        <label htmlFor="whos-cake">Female</label>
                    </div>
                    <div className="details-checkbox">
                        <input type="checkbox" name="whos-cake" value="Child" />
                        <label htmlFor="whos-cake">Child</label>
                    </div>
                    <div className="details-checkbox">
                        <input type="checkbox" name="whos-cake" value="Teen" />
                        <label htmlFor="whos-cake">Teen</label>
                    </div>
                    <div className="details-checkbox">
                        <input type="checkbox" name="whos-cake" value="Adult" />
                        <label htmlFor="whos-cake">Adult</label>
                    </div>
                </div>
            </div>
            <div className="details-cake-make-container">
                <h5 className="details-title">
                    List Preferred Colors For Cake
                </h5>
                <div className="details-textbox-container">
                    <form action="">
                        <textarea
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
                        />
                        <aside>
                            Upload any photo example <br />
                            of a cake design that you would like to copy for
                            your cake. <br />
                            You may also send a link in the field below.
                        </aside>
                        <textarea
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
                            name="extra-details"
                            id="details-extra-details"
                            placeholder="Enter Details Here..."
                        ></textarea>
                    </form>
                </div>
            </div>
            <div className="details-cake-make-container">
                <h5 className="details-title">Details Cost</h5>
                <div>$0.00</div>
            </div>
        </section>
    );
};

export default CakeDetails;

//frameworks
import React from "react";

//styles
import "../../styles/CupcakeBuild/CCDetails.scss";

const CCDetails = () => {
    return (
        <section className="ccd-container">
            <h3>Cupcake Details</h3>
            <hr />
            <div className="ccd-make-container">
                <h5 className="ccd-title">What Are These Cupcakes For?</h5>
                <form action="">
                    <select className="ccd-dropdown" name="cake-size-dropdown">
                        <option value="">Birthday</option>
                        <option value="">Baby Shower</option>
                        <option value="">Graduation</option>
                        <option value="">Anniversary</option>
                        <option value="">Other</option>
                    </select>
                </form>
            </div>

            <div id="ccd-checkbox-wrapper" className="ccd-make-container">
                <h5 className="ccd-title">Who Are These Cupcakes For?</h5>
                <div className="ccd-checkbox-container">
                    <div className="ccd-checkbox">
                        <input type="checkbox" name="whos-cake" value="Male" />
                        <label htmlFor="whos-cake">Male</label>
                    </div>
                    <div className="ccd-checkbox">
                        <input
                            type="checkbox"
                            name="whos-cake"
                            value="Female"
                        />
                        <label htmlFor="whos-cake">Female</label>
                    </div>
                    <div className="ccd-checkbox">
                        <input type="checkbox" name="whos-cake" value="Child" />
                        <label htmlFor="whos-cake">Child</label>
                    </div>
                    <div className="ccd-checkbox">
                        <input type="checkbox" name="whos-cake" value="Teen" />
                        <label htmlFor="whos-cake">Teen</label>
                    </div>
                    <div className="ccd-checkbox">
                        <input type="checkbox" name="whos-cake" value="Adult" />
                        <label htmlFor="whos-cake">Adult</label>
                    </div>
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
                            of a cupcake design that you would like to copy for
                            your cupcakes. <br />
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
                <h5 className="ccd-title">Additional Design/Theme Details</h5>
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
};

export default CCDetails;

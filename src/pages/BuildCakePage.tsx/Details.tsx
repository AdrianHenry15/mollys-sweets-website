//frameworks
import React from "react";

//styles
import "../../styles/BuildYourCake/Details.scss";

const CakeDetails = () => {
    return (
        <section className="cake-details-container">
            <h3>Cake Details</h3>
            <hr />
            <div className="cake-make-container">
                <h5>What Is The Cake For?</h5>
                <form action="">
                    <select
                        className="cake-size-dropdown"
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

            <div id="checkbox-wrapper" className="cake-make-container">
                <h5>Who Is The Cake For?</h5>
                <div className="checkbox-container">
                    <div className="checkbox">
                        <input type="checkbox" name="whos-cake" value="Male" />
                        <label htmlFor="whos-cake">Male</label>
                    </div>
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            name="whos-cake"
                            value="Female"
                        />
                        <label htmlFor="whos-cake">Female</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="whos-cake" value="Child" />
                        <label htmlFor="whos-cake">Child</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="whos-cake" value="Teen" />
                        <label htmlFor="whos-cake">Teen</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="whos-cake" value="Adult" />
                        <label htmlFor="whos-cake">Adult</label>
                    </div>
                </div>
            </div>
            <div className="cake-make-container">
                <h5>List Preferred Colors For Cake</h5>
                <div className="text-box-container">
                    <form action="">
                        <textarea
                            className="cake-size-dropdown"
                            name="cake-colors"
                            placeholder="Enter Colors Here..."
                        />
                    </form>
                </div>
            </div>
            <div
                id="cake-inscription-container"
                className="cake-make-container"
            >
                <h5>Write Cake Inscription (If any)</h5>
                <div className="text-box-container">
                    <form action="">
                        <textarea
                            className="cake-size-dropdown"
                            name="cake-colors"
                            placeholder="Enter Inscription Here..."
                            maxLength={80}
                        />
                    </form>
                </div>
            </div>
            <div id="photo-example-container" className="cake-make-container">
                <h5>Photo Example Of Cake</h5>
                <div className="text-box-container">
                    <form action="">
                        <input
                            className="file-option"
                            type="file"
                            name="cake-colors"
                            placeholder="Enter Inscription Here..."
                            maxLength={80}
                        />
                        <aside>
                            Upload any photo example of a cake design that you
                            would like to copy for your cake. You may also send
                            a link in the field below.
                        </aside>
                        <textarea
                            name="photo-link"
                            id="photo-link"
                            placeholder="Enter Link Of Cake Design Example Here..."
                            maxLength={450}
                        ></textarea>
                    </form>
                </div>
            </div>
            <div
                id="cake-inscription-container"
                className="cake-make-container"
            >
                <h5>Additional Design/Theme Details</h5>
                <div className="text-box-container">
                    <form action="">
                        <textarea
                            name="extra-details"
                            id="extra-details"
                            placeholder="Enter Details Here..."
                        ></textarea>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CakeDetails;

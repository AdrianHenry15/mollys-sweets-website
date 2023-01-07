import React from "react";

const CakeDetails = () => {
    return (
        <section className="cake-details-container">
            <h3>Cake Details</h3>
            <hr />
            <div className="cake-make-container">
                <h5>What Is The Cake For?</h5>
                <form action="">
                    <select name="cake-occasion" id="cake-size-dropdown">
                        <option value="">Birthday</option>
                        <option value="">Baby Shower</option>
                        <option value="">Graduation</option>
                        <option value="">Anniversary</option>
                        <option value="">Other</option>
                    </select>
                </form>
            </div>
            <div>
                <div className="cake-make-container">
                    <h5>Who Is The Cake For?</h5>
                    <div className="checkbox-container">
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                name="whos-cake"
                                value="Male"
                            />
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
                            <input
                                type="checkbox"
                                name="whos-cake"
                                value="Child"
                            />
                            <label htmlFor="whos-cake">Child</label>
                        </div>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                name="whos-cake"
                                value="Teen"
                            />
                            <label htmlFor="whos-cake">Teen</label>
                        </div>
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                name="whos-cake"
                                value="Adult"
                            />
                            <label htmlFor="whos-cake">Adult</label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CakeDetails;

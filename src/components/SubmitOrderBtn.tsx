import React from "react";
import { Link } from "react-router-dom";
import "./SubmitOrderBtn.scss";

const SubmitBtn = () => {
    return (
        <nav className="submit-btn-container">
            <Link className="submit-link" to="/order">
                <span>Submit Order</span>
            </Link>
        </nav>
    );
};

export default SubmitBtn;

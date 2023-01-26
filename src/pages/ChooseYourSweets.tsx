//styles
import "../styles/PageStyles/ChooseYourSweets.scss";
// frameworks
import React from "react";
import { Link } from "react-router-dom";

//icons
import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
import { RxCookie as CookieIcon } from "react-icons/rx";
import { GiStairsCake as CakeIcon } from "react-icons/gi";

const ChooseYourSweets = () => {
    return (
        <nav className="choose-your-sweets-wrapper">
            <Link to={"/build-your-cake"}>
                <CakeIcon className="choose-icon" />
                <h3 className="customize-link-label">Build Your Cake</h3>
            </Link>
            <Link to={"/choose-your-cupcakes"}>
                <CupcakeIcon className="choose-icon" />
                <h3 className="customize-link-label">Choose Your Cupcakes</h3>
            </Link>
            <Link to={"/choose-your-cookies"}>
                <CookieIcon className="choose-icon" />
                <h3 className="customize-link-label">Choose Your Cookies</h3>
            </Link>
        </nav>
    );
};

export default ChooseYourSweets;

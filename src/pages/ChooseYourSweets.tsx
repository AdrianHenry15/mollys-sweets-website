import { Link } from "react-router-dom";
import React from "react";
import { Sweets } from "../data/SweetsData";
import "../styles/ChooseYourSweets.scss";

const ChooseYourSweets = () => {
    return (
        <nav className="choose-your-sweets-wrapper">
            <Link to={"/build-your-cake"}>
                <img
                    className="customize-link-img"
                    src={Sweets.Cakes[3].src}
                    alt={Sweets.Cakes[3].name}
                />
                <h3 className="customize-link-label">Build Your Cake</h3>
            </Link>
            <Link to={"/choose-your-cupcakes"}>
                <img
                    className="customize-link-img"
                    src={Sweets.Cupcakes[4].src}
                    alt={Sweets.Cupcakes[4].name}
                />
                <h3 className="customize-link-label">Choose Your Cupcakes</h3>
            </Link>
            <Link to={"/choose-your-cookies"}>
                <img
                    className="customize-link-img"
                    src={Sweets.Cookies[3].src}
                    alt={Sweets.Cookies[1].name}
                />
                <h3 className="customize-link-label">Choose Your Cookies</h3>
            </Link>
        </nav>
    );
};

export default ChooseYourSweets;

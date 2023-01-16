//data
import { SweetsImages } from "../data/ImageData";
//styles
import "../styles/ChooseYourSweets.scss";
// frameworks
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ChooseYourSweets = () => {
    return (
        <nav className="choose-your-sweets-wrapper">
            <Link to={"/build-your-cake"}>
                <LazyLoadImage
                    className="customize-link-img"
                    src={SweetsImages.Cakes[3].src}
                    alt={SweetsImages.Cakes[3].name}
                />
                <h3 className="customize-link-label">Build Your Cake</h3>
            </Link>
            <Link to={"/choose-your-cupcakes"}>
                <LazyLoadImage
                    className="customize-link-img"
                    src={SweetsImages.Cupcakes[4].src}
                    alt={SweetsImages.Cupcakes[4].name}
                />
                <h3 className="customize-link-label">Choose Your Cupcakes</h3>
            </Link>
            <Link to={"/choose-your-cookies"}>
                <LazyLoadImage
                    className="customize-link-img"
                    src={SweetsImages.Cookies[3].src}
                    alt={SweetsImages.Cookies[1].name}
                />
                <h3 className="customize-link-label">Choose Your Cookies</h3>
            </Link>
        </nav>
    );
};

export default ChooseYourSweets;

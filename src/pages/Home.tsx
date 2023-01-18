//styles
import "../styles/Home.scss";

//frameworks
import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
    return (
        <section className="homepage-container">
            <nav className="home-sweets-options-container">
                <Link to={"/choose-your-sweets"} className="home-sweets-option">
                    <span>
                        Choose
                        <br />
                        Your
                        <br />
                        Sweets
                    </span>
                </Link>

                <Link to={"/sample-our-sweets"} className="home-sweets-option">
                    <span>
                        Scan
                        <br />
                        Our
                        <br />
                        Sweets
                    </span>
                </Link>
            </nav>
        </section>
    );
};

export default Home;

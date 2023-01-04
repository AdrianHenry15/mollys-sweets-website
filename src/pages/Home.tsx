import "../styles/Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <body className="homepage-container">
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
        </body>
    );
};

export default Home;

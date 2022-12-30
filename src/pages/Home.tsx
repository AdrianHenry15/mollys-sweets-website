import "../styles/Home.scss";

const Home = () => {
    return (
        <body className="homepage-container">
            <div className="home-sweets-options-container">
                <div className="home-sweets-option">
                    <span>
                        Choose
                        <br />
                        Your
                        <br />
                        Sweets
                    </span>
                </div>

                <div className="home-sweets-option">
                    <span>
                        Sample
                        <br />
                        Our
                        <br />
                        Sweets
                    </span>
                </div>
            </div>
        </body>
    );
};

export default Home;

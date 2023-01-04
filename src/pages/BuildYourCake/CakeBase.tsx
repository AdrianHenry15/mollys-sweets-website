import "../../styles/BuildYourCake.scss";
import SingleRound from "../../assets/imgs/create_a_cake/single-tier-round-white.png";
import SingleSheet from "../../assets/imgs/create_a_cake/single-tier-sheet.png";
import MultipleRound from "../../assets/imgs/create_a_cake/multiple-tier-round-white.png";

const CakeBase = () => {
    return (
        <div className="cake-base-container">
            <h3>Choose Cake Base</h3>
            <hr />

            {/* Cake Tier */}
            <div className="cake-make-container">
                <h5>Cake Tier</h5>
                <div className="choice-container">
                    <div className="option">
                        <img
                            className="choice"
                            src={SingleRound}
                            alt="round-cake"
                        />
                        <h5>Single</h5>
                    </div>
                    <div className="option">
                        <img
                            className="choice"
                            src={MultipleRound}
                            alt="round-cake"
                        />
                        <h5>Multiple</h5>
                    </div>
                </div>
            </div>

            {/* Cake Shape */}
            <div className="cake-make-container">
                <h5>Cake Shape</h5>
                <div className="choice-container">
                    <div className="option">
                        <img
                            className="choice"
                            src={SingleRound}
                            alt="round-cake"
                        />
                        <h5>Single</h5>
                    </div>
                    <div className="option">
                        <img
                            className="choice"
                            src={SingleSheet}
                            alt="round-cake"
                        />
                        <h5>Sheet</h5>
                    </div>
                </div>
            </div>

            {/* Cake Size */}
            <div className="cake-make-container">
                <h5>Round Cake Size</h5>
                <div className="choice-container">
                    <div className="option">
                        <form action="">
                            <label>
                                Choose One
                                <select
                                    name="cake-size"
                                    className="cake-size-dropdown"
                                >
                                    <option value=""></option>
                                </select>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CakeBase;

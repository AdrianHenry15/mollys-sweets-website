import "../styles/SampleOurSweets.scss";

import { Sweets } from "../data/Sweets";
import { SweetCategories } from "../data/Sweets";

const SampleOurSweets = () => {
    return (
        <body className="sos-container">
            <h1>Our Sweets</h1>
            <div className="scroll-wrapper">
                {(
                    Object.keys(SweetCategories) as Array<
                        keyof typeof SweetCategories
                    >
                ).map((key) => {
                    return (
                        <div className="scroll-container">
                            <h3 className="scroll-items-title">
                                {SweetCategories[key]}
                            </h3>
                            <div className="scroll-items-container">
                                <div className="scroll-items"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </body>
    );
};

export default SampleOurSweets;

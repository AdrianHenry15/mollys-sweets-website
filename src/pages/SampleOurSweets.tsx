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
                        <div key={`div-${key}`} className="scroll-container">
                            <h3 className="scroll-items-title">
                                {SweetCategories[key]}
                            </h3>
                            <div className="scroll-items-container">
                                {Sweets[SweetCategories[key]].map(
                                    ({ id, name, description, img }) => {
                                        return (
                                            <div
                                                key={`div-${name}`}
                                                className="scroll-items-wrapper"
                                            >
                                                <img
                                                    src={img}
                                                    alt={name}
                                                    className="scroll-items"
                                                />
                                                <h5 className="scroll-name">
                                                    {name}
                                                </h5>
                                                <i className="scroll-description">
                                                    {description}
                                                </i>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </body>
    );
};

export default SampleOurSweets;

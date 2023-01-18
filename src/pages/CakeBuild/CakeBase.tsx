// styles
import "../../styles/CakeBuild/Base.scss";
//frameworks
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//images
import SingleRound from "../../assets/imgs/create_a_cake/single-tier-round-white.png";
import MultipleRound from "../../assets/imgs/create_a_cake/multiple-tier-round-white.png";
import SingleSheet from "../../assets/imgs/create_a_cake/single-tier-sheet.png";
import MultipleSheet from "../../assets/imgs/create_a_cake/multiple-tier-sheet.png";
//data
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../stateStore/GlobalStateStore";
import { CakeTiers, CakeShapes } from "../../stateStore/constants/Enums";

interface ICakeBaseProps {
    store?: GlobalStateStore;
}

const CakeBase: React.FC<ICakeBaseProps> = inject("store")(
    observer(({ store }: ICakeBaseProps) => {
        // variables

        //state
        const [cakeTier, setCakeTier] = useState("");
        const [cakeShape, setCakeShape] = useState("");

        const renderCakeSizes = () => {
            let shape;
            cakeShape === CakeShapes.ROUND
                ? (shape = store!.ProductStore.products.sizes.roundSizes)
                : (shape = store!.ProductStore.products.sizes.sheetSizes);

            // renders cake sizes
            return shape.map(({ id, productSize, productServes, price }) => {
                if (id === 0) {
                    return (
                        <option key={`${productSize}${id}`} value="">
                            Choose One
                        </option>
                    );
                } else {
                    return (
                        <option
                            key={`${id}`}
                            value={productSize}
                        >{`${productSize} (${productServes}) ($${price})`}</option>
                    );
                }
            });
        };
        return (
            <section className="base-cake-base-container">
                <h3>Choose Cake Base</h3>
                <hr />

                {/* Cake Tier */}
                <div className="base-cake-make-container">
                    <h5 className="base-title">Cake Tier</h5>
                    <div className="base-choice-container">
                        <div className="base-option">
                            <LazyLoadImage
                                onClick={() => setCakeTier(CakeTiers.SINGLE)}
                                className={
                                    cakeTier === CakeTiers.SINGLE
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={SingleRound}
                                alt="round-cake"
                            />
                            <h5 className="base-option">Single</h5>
                        </div>
                        <div className="base-option">
                            <LazyLoadImage
                                onClick={() => setCakeTier(CakeTiers.MULTIPLE)}
                                className={
                                    cakeTier === CakeTiers.MULTIPLE
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={MultipleRound}
                                alt="round-cake"
                            />
                            <h5 className="base-option">Multiple</h5>
                        </div>
                    </div>
                </div>

                {/* Cake Shape */}
                <div className="base-cake-make-container">
                    <h5 className="base-title">Cake Shape</h5>
                    <div className="base-choice-container">
                        <div className="base-option">
                            <LazyLoadImage
                                onClick={() => setCakeShape(CakeShapes.ROUND)}
                                className={
                                    cakeShape === CakeShapes.ROUND
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={
                                    cakeTier === CakeTiers.SINGLE
                                        ? SingleRound
                                        : MultipleRound
                                }
                                alt="round-cake"
                            />
                            <h5 className="base-option">Round</h5>
                        </div>
                        <div className="base-option">
                            <LazyLoadImage
                                onClick={() => setCakeShape(CakeShapes.SHEET)}
                                className={
                                    cakeShape === CakeShapes.SHEET
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={
                                    cakeTier === CakeTiers.SINGLE
                                        ? SingleSheet
                                        : MultipleSheet
                                }
                                alt="round-cake"
                            />
                            <h5 className="base-option">Sheet</h5>
                        </div>
                    </div>
                </div>

                {/* Cake Size */}
                <div className="base-cake-make-container">
                    <h5 className="base-title">
                        {cakeShape === CakeShapes.ROUND ? "Round" : "Sheet"}{" "}
                        Cake Size
                    </h5>
                    <div className="base-choice-container">
                        <div className="base-option">
                            <form action="">
                                <select
                                    name="cake-size"
                                    className="base-cake-size-dropdown"
                                >
                                    {renderCakeSizes()}
                                    {/* {cakeShape === CakeShapes.ROUND ? roundSizes.map(
                                        ({
                                            id,
                                            productSize,
                                            productServes,
                                            price,
                                        }) => {
                                            if (id === 0) {
                                                return (
                                                    <option
                                                        key={`${productSize}${id}`}
                                                        value=""
                                                    >
                                                        Choose One
                                                    </option>
                                                );
                                            } else {
                                                return (
                                                    <option
                                                        key={`${id}`}
                                                        value={productSize}
                                                    >{`${productSize} (${productServes}) ($${price})`}</option>
                                                );
                                            }
                                        }
                                    )} */}
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="base-cake-make-container">
                    <h5 className="base-title">Cake Base Cost</h5>
                    <div>$0.00</div>
                </div>
            </section>
        );
    })
);

export default CakeBase;

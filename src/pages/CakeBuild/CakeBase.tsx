// styles
import "../../styles/CakeBuild/Base.scss";
//frameworks
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//images
import SingleRoundImg from "../../assets/imgs/create_a_cake/single-tier-round-white.png";
import MultipleRoundImg from "../../assets/imgs/create_a_cake/multiple-tier-round-white.png";
import SingleSheetImg from "../../assets/imgs/create_a_cake/single-tier-sheet.png";
import MultipleSheetImg from "../../assets/imgs/create_a_cake/multiple-tier-sheet.png";
//data
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { CakeTiers, CakeShapes } from "../../store/constants/Enums";
import { ProductData } from "../../data/Products";

interface ICakeBaseProps {
    store?: GlobalStateStore;
}

// interface ICakeBaseState {}

@inject("store")
@observer
class CakeBase extends React.Component<ICakeBaseProps, {}> {
    renderCakeSizes = () => {
        const cakeShape = this.props.store!.CakeStore.cakeBase.shape;
        let shape;
        cakeShape === CakeShapes.ROUND
            ? (shape = ProductData.products.sizes.roundSizes)
            : (shape = ProductData.products.sizes.sheetSizes);

        // renders cake sizes
        return shape.map(({ id, productSize, productServes, price }) => {
            if (id === 0) {
                return (
                    <option key={`${price}${id}`} value="">
                        Choose One
                    </option>
                );
            } else {
                return (
                    <option
                        key={`${id}`}
                        value={`${price}`}
                    >{`${productSize} (${productServes}) ($${price})`}</option>
                );
            }
        });
    };
    render() {
        // store variables
        const cakeTier = this.props.store!.CakeStore.cakeBase.tier;
        const cakeShape = this.props.store!.CakeStore.cakeBase.shape;
        const sizeCost = this.props.store!.CakeStore.cakeCosts.sizeCost;

        // actions
        const updateTier =
            this.props.store!.CakeActions.cakeBaseActions.updateTier;
        const updateShape =
            this.props.store!.CakeActions.cakeBaseActions.updateShape;
        const handleCakeSizeCost =
            this.props.store!.CakeActions.cakeCostActions.handleCakeSizeCost;

        // main
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
                                onClick={() => updateTier(CakeTiers.SINGLE)}
                                className={
                                    cakeTier === CakeTiers.SINGLE
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={
                                    cakeShape === CakeShapes.SHEET
                                        ? SingleSheetImg
                                        : SingleRoundImg
                                }
                                alt="round-cake"
                            />
                            <h5 className="base-option">Single</h5>
                        </div>
                        <div className="base-option">
                            <LazyLoadImage
                                onClick={() => updateTier(CakeTiers.MULTIPLE)}
                                className={
                                    cakeTier === CakeTiers.MULTIPLE
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={
                                    cakeShape === CakeShapes.ROUND
                                        ? MultipleRoundImg
                                        : MultipleSheetImg
                                }
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
                                onClick={() => updateShape(CakeShapes.ROUND)}
                                className={
                                    cakeShape === CakeShapes.ROUND
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={
                                    cakeTier === CakeTiers.SINGLE
                                        ? SingleRoundImg
                                        : MultipleRoundImg
                                }
                                alt="round-cake"
                            />
                            <h5 className="base-option">Round</h5>
                        </div>
                        <div className="base-option">
                            <LazyLoadImage
                                onClick={() => updateShape(CakeShapes.SHEET)}
                                className={
                                    cakeShape === CakeShapes.SHEET
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={
                                    cakeTier === CakeTiers.SINGLE
                                        ? SingleSheetImg
                                        : MultipleSheetImg
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
                                    onChange={(e) => handleCakeSizeCost(e)}
                                    name={sizeCost.toString()}
                                    defaultValue={sizeCost}
                                    className="base-cake-size-dropdown"
                                >
                                    {this.renderCakeSizes()}
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="base-cake-make-container">
                    <h5 className="base-title">Cake Base Cost</h5>
                    <div>{`$${this.props.store!.updateCakeBaseCost()}`}</div>
                </div>
            </section>
        );
    }
}

export default CakeBase;

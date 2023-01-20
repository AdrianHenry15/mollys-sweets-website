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

interface ICakeBaseState {
    cakeTier: string;
    cakeShape: string;
}

@inject("store")
@observer
class CakeBase extends React.Component<ICakeBaseProps, ICakeBaseState> {
    constructor(props: ICakeBaseProps) {
        super(props);

        this.state = {
            cakeTier: "",
            cakeShape: "",
        };
    }

    //state functions
    setCakeShape = (shape: CakeShapes) => {
        this.setState({
            cakeShape: shape,
        });
    };

    //functions
    updateTier = (tier: CakeTiers) => {
        this.setState({
            cakeTier: tier,
        });
        if (tier === CakeTiers.SINGLE) {
            this.props.store!.ProductStore.cake.cakeBaseCost =
                this.props.store!.ProductStore.cake.sizeCost +
                ProductData.products.tiers.single[1].price;
            return;
        } else if (tier === CakeTiers.MULTIPLE) {
            this.props.store!.ProductStore.cake.cakeBaseCost =
                this.props.store!.ProductStore.cake.sizeCost +
                ProductData.products.tiers.multiple[1].price;
            return;
        }
    };

    renderCakeSizes = () => {
        let shape;
        this.state.cakeShape === CakeShapes.ROUND
            ? (shape = ProductData.products.sizes.roundSizes)
            : (shape = ProductData.products.sizes.sheetSizes);

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
    render() {
        // store variables
        const cakeBaseCost = this.props.store!.ProductStore.cake.cakeBaseCost;

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
                                onClick={() =>
                                    this.updateTier(CakeTiers.SINGLE)
                                }
                                className={
                                    this.state.cakeTier === CakeTiers.SINGLE
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={
                                    this.state.cakeShape === CakeShapes.SHEET
                                        ? SingleSheetImg
                                        : SingleRoundImg
                                }
                                alt="round-cake"
                            />
                            <h5 className="base-option">Single</h5>
                        </div>
                        <div className="base-option">
                            <LazyLoadImage
                                onClick={() =>
                                    this.updateTier(CakeTiers.MULTIPLE)
                                }
                                className={
                                    this.state.cakeTier === CakeTiers.MULTIPLE
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={
                                    this.state.cakeShape === CakeShapes.ROUND
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
                                onClick={() =>
                                    this.setCakeShape(CakeShapes.ROUND)
                                }
                                className={
                                    this.state.cakeShape === CakeShapes.ROUND
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={
                                    this.state.cakeTier === CakeTiers.SINGLE
                                        ? SingleRoundImg
                                        : MultipleRoundImg
                                }
                                alt="round-cake"
                            />
                            <h5 className="base-option">Round</h5>
                        </div>
                        <div className="base-option">
                            <LazyLoadImage
                                onClick={() =>
                                    this.setCakeShape(CakeShapes.SHEET)
                                }
                                className={
                                    this.state.cakeShape === CakeShapes.SHEET
                                        ? "base-choice base-choice-active"
                                        : "base-choice"
                                }
                                src={
                                    this.state.cakeTier === CakeTiers.SINGLE
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
                        {this.state.cakeShape === CakeShapes.ROUND
                            ? "Round"
                            : "Sheet"}{" "}
                        Cake Size
                    </h5>
                    <div className="base-choice-container">
                        <div className="base-option">
                            <form action="">
                                <select
                                    name="cake-size"
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
                    <div>{`$${cakeBaseCost}`}</div>
                </div>
            </section>
        );
    }
}

export default CakeBase;

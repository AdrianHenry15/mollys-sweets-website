// styles
import "../../styles/CakeBuildStyles/Base.scss";
// External Dependencies
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
import { action } from "mobx";

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
            if (price === 0) {
                return (
                    <option key={`${productServes}`} value="0">
                        Choose One
                    </option>
                );
            } else {
                return (
                    <option
                        key={`${productServes}`}
                        value={`${id}`}
                    >{`${productSize} (${productServes}) ($${price})`}</option>
                );
            }
        });
    };

    getTierInfo = action((tier: string) => {
        this.props.store!.CakeStore.cakeBase.tier = tier as CakeTiers;
        if (tier === CakeTiers.SINGLE) {
            this.props.store!.CakeStore.cakeCosts.tierCost =
                ProductData.products.tiers.single[1].price;
            this.props.store!.CakeStore.cakeBase.tier = CakeTiers.SINGLE;
            this.props.store!.CartStore.cartEmpty = false;
            return;
        } else if (tier === CakeTiers.MULTIPLE) {
            this.props.store!.CakeStore.cakeCosts.tierCost =
                ProductData.products.tiers.multiple[1].price;
            this.props.store!.CakeStore.cakeBase.tier = CakeTiers.MULTIPLE;
            this.props.store!.CartStore.cartEmpty = false;
            return;
        }
    });
    getShape = action((shape: string) => {
        this.props.store!.CakeStore.cakeBase.shape = shape as CakeShapes;
        this.props.store!.CartStore.cartEmpty = false;
    });
    getCakeSizeInfo = action((e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);

        if (this.props.store!.CakeStore.cakeBase.shape === CakeShapes.ROUND) {
            //size
            this.props.store!.CakeStore.cakeBase.size =
                ProductData.products.sizes.roundSizes[value].productSize!;

            //serves
            this.props.store!.CakeStore.cakeBase.serves =
                ProductData.products.sizes.roundSizes[value].productServes!;

            //price
            this.props.store!.CakeStore.cakeCosts.sizeCost =
                ProductData.products.sizes.roundSizes[value].price;

            // cart state
            this.props.store!.CartStore.cartEmpty = false;
        } else if (
            this.props.store!.CakeStore.cakeBase.shape === CakeShapes.SHEET
        ) {
            //tier
            //size
            this.props.store!.CakeStore.cakeBase.size =
                ProductData.products.sizes.sheetSizes[value].productSize!;

            //serves
            this.props.store!.CakeStore.cakeBase.serves =
                ProductData.products.sizes.sheetSizes[value].productServes!;

            //price
            this.props.store!.CakeStore.cakeCosts.sizeCost =
                ProductData.products.sizes.sheetSizes[value].price;

            // cart state
            this.props.store!.CartStore.cartEmpty = false;
        }
    });
    render() {
        // store variables
        const cakeTier = this.props.store!.CakeStore.cakeBase.tier;
        const cakeShape = this.props.store!.CakeStore.cakeBase.shape;
        const sizeCost = this.props.store!.CakeStore.cakeCosts.sizeCost;

        // computeds
        const getCakeBaseCost =
            this.props.store!.ComputedCakeCosts.computedCosts
                .updateCakeBaseCost;

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
                                    this.getTierInfo(CakeTiers.SINGLE)
                                }
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
                                onClick={() =>
                                    this.getTierInfo(CakeTiers.MULTIPLE)
                                }
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
                                onClick={() => this.getShape(CakeShapes.ROUND)}
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
                                onClick={() => this.getShape(CakeShapes.SHEET)}
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
                                    onChange={(e) => this.getCakeSizeInfo(e)}
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
                    <div>{`$${getCakeBaseCost()}`}</div>
                </div>
            </section>
        );
    }
}

export default CakeBase;

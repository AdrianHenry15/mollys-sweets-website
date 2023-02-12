// styles
import "../../styles/CakeBuildStyles/Base.scss";
// External Dependencies
import React from "react";
//data
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { CakeTiers, CakeShapes } from "../../store/constants/Enums";
import { ProductData } from "../../data/Data";
import { action } from "mobx";

interface ICakeBaseProps {
    store?: GlobalStateStore;
}

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

        return tier === CakeTiers.SINGLE
            ? (this.props.store!.CakeStore.cakeBase.tier = CakeTiers.SINGLE)
            : (this.props.store!.CakeStore.cakeBase.tier = CakeTiers.MULTIPLE);

        // if (tier === CakeTiers.SINGLE) {
        //     this.props.store!.CakeStore.cakeBase.tier = CakeTiers.SINGLE;
        //     return;
        // } else if (tier === CakeTiers.MULTIPLE) {
        //     this.props.store!.CakeStore.cakeBase.tier = CakeTiers.MULTIPLE;
        //     return;
        // }
    });
    getShape = action((shape: string) => {
        this.props.store!.CakeStore.cakeBase.shape = shape as CakeShapes;
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
        } else if (
            this.props.store!.CakeStore.cakeBase.shape === CakeShapes.SHEET
        ) {
            //size
            this.props.store!.CakeStore.cakeBase.size =
                ProductData.products.sizes.sheetSizes[value].productSize!;

            //serves
            this.props.store!.CakeStore.cakeBase.serves =
                ProductData.products.sizes.sheetSizes[value].productServes!;
        }
    });
    render() {
        // store variables
        const cakeTier = this.props.store!.CakeStore.cakeBase.tier;
        const cakeShape = this.props.store!.CakeStore.cakeBase.shape;
        const cakeSize = this.props.store!.CakeStore.cakeBase.size;
        const sizeCost = this.props.store!.CakeStore.cakeCosts.sizeCost;

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
                            <input type="radio" name="tier" />
                            <label className="base-label">Single</label>
                        </div>
                        <div className="base-option">
                            <input type="radio" name="tier" />
                            <label className="base-label">Multiple</label>
                        </div>
                    </div>
                </div>

                {/* Cake Shape */}
                <div className="base-cake-make-container">
                    <h5 className="base-title">Cake Shape</h5>
                    <div className="base-choice-container">
                        <div className="base-option">
                            <input
                                onClick={() => this.getShape(CakeShapes.ROUND)}
                                type="radio"
                                name="shape"
                            />
                            <label className="base-label">Round</label>
                        </div>
                        <div className="base-option">
                            <input
                                onClick={() => this.getShape(CakeShapes.SHEET)}
                                type="radio"
                                name="shape"
                            />
                            <label className="base-label">Sheet</label>
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
                            <select
                                onChange={(e) => this.getCakeSizeInfo(e)}
                                name="size"
                                className="base-cake-size-dropdown"
                            >
                                {this.renderCakeSizes()}
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CakeBase;

// styles
import "./Base.scss";
// External Dependencies
import React from "react";
//data
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { CakeTiers, CakeShapes } from "../../store/constants/Enums";
import { ProductData } from "../../data/Data";
import { action } from "mobx";

interface IBaseProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Base extends React.Component<IBaseProps, {}> {
    renderCakeSizes = () => {
        const cakeShape = this.props.store!.CakeStore.base.shape;
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
        this.props.store!.CakeStore.base.tier = tier as CakeTiers;

        if (tier === CakeTiers.SINGLE) {
            this.props.store!.CakeStore.base.tier = CakeTiers.SINGLE;
            console.log(this.props.store!.CakeStore.base.tier);
            return;
        } else if (tier === CakeTiers.MULTIPLE) {
            this.props.store!.CakeStore.base.tier = CakeTiers.MULTIPLE;
            console.log(this.props.store!.CakeStore.base.tier);
            return;
        }
    });
    getShape = action((shape: string) => {
        this.props.store!.CakeStore.base.shape = shape as CakeShapes;
        console.log(this.props.store!.CakeStore.base.shape);
    });
    getCakeSizeInfo = action((e: React.ChangeEvent<HTMLSelectElement>) => {
        let select: HTMLSelectElement = e.target;
        let value: number = parseInt(select.value);

        if (this.props.store!.CakeStore.base.shape === CakeShapes.ROUND) {
            //size
            this.props.store!.CakeStore.base.size =
                ProductData.products.sizes.roundSizes[value].productSize!;

            //serves
            this.props.store!.CakeStore.base.serves =
                ProductData.products.sizes.roundSizes[value].productServes!;
        } else if (
            this.props.store!.CakeStore.base.shape === CakeShapes.SHEET
        ) {
            //size
            this.props.store!.CakeStore.base.size =
                ProductData.products.sizes.sheetSizes[value].productSize!;

            //serves
            this.props.store!.CakeStore.base.serves =
                ProductData.products.sizes.sheetSizes[value].productServes!;
        }
    });
    render() {
        // store variables

        const cakeShape = this.props.store!.CakeStore.base.shape;

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
                            <input
                                onClick={() =>
                                    this.getTierInfo(CakeTiers.SINGLE)
                                }
                                value={CakeTiers.SINGLE}
                                type="radio"
                                name="tier"
                            />
                            <label className="base-label">Single</label>
                        </div>
                        <div className="base-option">
                            <input
                                onClick={() =>
                                    this.getTierInfo(CakeTiers.MULTIPLE)
                                }
                                value={CakeTiers.MULTIPLE}
                                type="radio"
                                name="tier"
                            />
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

export default Base;

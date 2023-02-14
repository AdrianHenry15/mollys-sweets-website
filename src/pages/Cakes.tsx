// Styles
import "./Cakes.scss";
import "../GlobalStyles.scss";

// Frameworks
import ScrollContainer from "react-indiana-drag-scroll";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SweetsImages } from "../data/ImageData";

//store
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../store/GlobalStateStore";
import { ProductData } from "../data/Data";

interface ICakesProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Cakes extends React.Component<ICakesProps, {}> {
    //main
    render() {
        //variables
        const flavors = ProductData.products.flavors;
        const fillings = ProductData.products.fillings;
        const frostings = ProductData.products.frostings;
        return (
            <section className="row-container">
                <h1>Cakes</h1>
                <section className="scroll-wrapper">
                    <div className="dev-scroll-container">
                        <h3 className="scroll-items-title">Cakes</h3>

                        <ScrollContainer
                            horizontal
                            className="scroll-container"
                        >
                            <div className="scroll-items-container">
                                {SweetsImages.Cakes.map(
                                    ({ id, name, description, src }) => {
                                        return (
                                            <div
                                                key={`div-${name}${id}`}
                                                className="scroll-items-wrapper"
                                            >
                                                <LazyLoadImage
                                                    key={name}
                                                    src={src}
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
                        </ScrollContainer>
                    </div>
                </section>
                <section className="genres-container">
                    <div className="flavors-container">
                        <h4>Flavors</h4>
                        <div className="flavors-items-container">
                            {flavors.map(({ id, productName }) => {
                                return (
                                    <span
                                        key={`${id}${productName}`}
                                        className="flavors-items"
                                    >
                                        {productName}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <div className="frostings-container">
                        <h4>Frostings</h4>
                        <div className="frostings-items-container">
                            {frostings.map(({ id, productName }) => {
                                return (
                                    <span
                                        key={`${id}${productName}`}
                                        className="frostings-items"
                                    >
                                        {productName}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <div className="fillings-container">
                        <h4>Fillings</h4>
                        <div className="fillings-items-container">
                            {fillings.map(({ id, productName }) => {
                                return (
                                    <span
                                        key={`${id}${productName}`}
                                        className="fillings-items"
                                    >
                                        {productName}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Cakes;

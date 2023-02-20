// Styles
import "./Cupcakes.scss";
import "../../GlobalStyles.scss";

// Frameworks
import ScrollContainer from "react-indiana-drag-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import { SweetsImages } from "../../data/ImageData";

//store
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { inject, observer } from "mobx-react";
import { ProductData } from "../../data/Data";

interface ICupcakesProps {
    store?: GlobalStateStore;
}

@inject("store")
@observer
class Cupcakes extends React.Component<ICupcakesProps, {}> {
    //main
    render() {
        //variables
        const flavors = ProductData.products.flavors;
        const frostings = ProductData.products.frostings;

        //main
        return (
            <section className="row-container">
                <h1>Cupcakes</h1>
                <section className="scroll-wrapper">
                    <div className="dev-scroll-container">
                        <h3 className="scroll-items-title">Cupcakes</h3>
                        <ScrollContainer
                            horizontal
                            className="scroll-container"
                        >
                            <div className="scroll-items-container">
                                {SweetsImages.Cupcakes.map(
                                    ({ id, name, description, src }) => {
                                        return (
                                            <div
                                                key={`div-${name}${id}`}
                                                className="scroll-items-wrapper"
                                            >
                                                <LazyLoadImage
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
                </section>
            </section>
        );
    }
}

export default Cupcakes;

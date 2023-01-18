// Styles
import "../styles/Cookies.scss";
import "../styles/GlobalStyles.scss";

// Data
import { SweetsImages } from "../data/ImageData";

// Frameworks
import ScrollContainer from "react-indiana-drag-scroll";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//store
import { inject, observer } from "mobx-react";
import { GlobalStateStore } from "../store/GlobalStateStore";

interface ICookiesProps {
    store?: GlobalStateStore;
}

const Cookies: React.FC<ICookiesProps> = inject("store")(
    observer(({ store }: ICookiesProps) => {
        //variables
        const cookies = store!.ProductStore.products.cookies;
        //main
        return (
            <section className="row-container">
                <h1>Cookies</h1>
                <section className="scroll-wrapper">
                    <div className="dev-scroll-container">
                        <h3 className="scroll-items-title">Cookies</h3>
                        <ScrollContainer
                            horizontal
                            className="scroll-container"
                        >
                            <div className="scroll-items-container">
                                {SweetsImages.Cookies.map(
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
                            {cookies.map(({ id, productName }) => {
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
                </section>
            </section>
        );
    })
);

export default Cookies;

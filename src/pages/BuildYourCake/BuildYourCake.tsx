import "../../styles/BuildYourCake.scss";
import CakeBase from "./CakeBase";

const BuildYourCake = () => {
    return (
        <body className="build-cake-wrapper">
            <section className="build-cake-container">
                <aside className="cake-options-container">
                    <h4 className="cake-options-label">
                        Cake Options Overview
                    </h4>
                    <div className="options-container">
                        <h5 className="cake-options-title">Sizes</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Sheet Size:</th>
                                    <th>Serves:</th>
                                </tr>
                                <tr>
                                    <td>1/4</td>
                                    <td>28 People</td>
                                </tr>
                                <tr>
                                    <td>1/2</td>
                                    <td>48 People</td>
                                </tr>
                                <tr>
                                    <td>FULL</td>
                                    <td>98 People</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Round Size:</th>
                                    <th>Serves:</th>
                                </tr>
                                <tr>
                                    <td>6"</td>
                                    <td>6-8 People</td>
                                </tr>
                                <tr>
                                    <td>7"</td>
                                    <td>10-12 People</td>
                                </tr>
                                <tr>
                                    <td>8"</td>
                                    <td>10-18 People</td>
                                </tr>
                                <tr>
                                    <td>9"</td>
                                    <td>6-8 People</td>
                                </tr>
                                <tr>
                                    <td>10"</td>
                                    <td>10-12 People</td>
                                </tr>
                                <tr>
                                    <td>11"</td>
                                    <td>10-18 People</td>
                                </tr>
                                <tr>
                                    <td>12"</td>
                                    <td>20-24 People</td>
                                </tr>
                                <tr>
                                    <td>13"</td>
                                    <td>26-35 People</td>
                                </tr>
                                <tr>
                                    <td>14"</td>
                                    <td>35-48 People</td>
                                </tr>
                                <tr>
                                    <td>15"</td>
                                    <td>50-65 People</td>
                                </tr>
                                <tr>
                                    <td>16"</td>
                                    <td>70-85 People</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </aside>
                <section className="customize-cake-container">
                    <div className="note">
                        <p>
                            <strong>NOTE: </strong>
                            <i>
                                The form below is only to request a custom cake
                                quote. Final cake order details will still need
                                further discussion. All prices are subject to
                                change without further notice.
                            </i>
                        </p>
                    </div>
                    <section className="create-cake-container">
                        <CakeBase />
                    </section>
                </section>
            </section>
        </body>
    );
};

export default BuildYourCake;

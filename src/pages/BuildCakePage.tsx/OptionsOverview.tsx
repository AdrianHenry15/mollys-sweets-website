import { RoundSizes, SheetSizes } from "../../data/SweetsData";
import React from "react";

const OptionsOverview = () => {
    return (
        <aside className="cake-options-container">
            <h4 className="cake-options-label">Cake Options Overview</h4>
            <div className="options-container">
                <h5 className="cake-options-title">Sizes</h5>
                <table>
                    <tbody>
                        <tr>
                            <th>Sheet Size:</th>
                            <th>Serves:</th>
                        </tr>
                        {SheetSizes.map(({ size, amountOfPeople, price }) => {
                            return (
                                <tr key={`${size}${price}`}>
                                    <td>{size}</td>
                                    <td>{amountOfPeople}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <th>Round Size:</th>
                            <th>Serves:</th>
                        </tr>
                        {RoundSizes.map(({ size, amountOfPeople, price }) => {
                            return (
                                <tr key={`${size}${price}`}>
                                    <td>{size}</td>
                                    <td>{amountOfPeople}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </aside>
    );
};

export default OptionsOverview;

// //store
import { inject, observer } from "mobx-react";
// import React from "react";
// import { GlobalStateStore } from "../../store/GlobalStateStore";

// // styles
// import "../../styles/ComponentStyles/OrderStyles/Order.scss";

// //icons
// import { GiStairsCake as CakeIcon } from "react-icons/gi";
// import { Link } from "react-router-dom";
// import { action } from "mobx";
// import { ProductCategories } from "../../store/constants/Enums";
// import CakeOrder from "./features/CakeOrder";
// import CupcakeOrder from "./features/CupcakeOrder";
// import CookieOrder from "./features/CookieOrder";
// // import { RiCake3Line as CupcakeIcon } from "react-icons/ri";
// // import { RxCookie as CookieIcon } from "react-icons/rx";

// interface IOrderProps {
//     store?: GlobalStateStore;
// }

// @inject("store")
// @observer
// class Order extends React.Component<IOrderProps, {}> {
//     renderCategoryOrder = action((): JSX.Element => {
//         const orderFilled = this.props.store!.OrderStore.orderFilled;
//         if (category === ProductCategories.CAKES) {
//             return <CakeOrder />;
//         } else if (category === ProductCategories.CUPCAKES) {
//             return <CupcakeOrder />;
//         } else {
//             return <CookieOrder />;
//         }
//     });
//     //main
//     render() {
//         //store variables
//         const cakeFlavor = this.props.store!.CakeStore.cakeFlavors.flavor;
//         const cakeFrosting = this.props.store!.CakeStore.cakeFlavors.frosting;
//         const cakeFilling = this.props.store!.CakeStore.cakeFlavors.filling;

//         //store computeds
//         const updateTotalCakeCost =
//             this.props.store!.ComputedCakeCosts.computedCosts
//                 .updateTotalCakeCost;
//         return (
//             <section className="main-order-container">
//                 {this.renderCategoryOrder()}
//                 {/* <div className="product-item-container">
//                     <CakeIcon className="product-icon-display" />
//                     <div className="product-info">
//                         <h4 className="product-title">{`${cakeFlavor} ${cakeFrosting} ${cakeFilling}`}</h4>
//                         <div className="info-btn-container">
//                             <div className="info-btn remove-btn">
//                                 Remove Item
//                             </div>
//                             <Link to={"../../build-your-cake"}>
//                                 <span className="info-btn edit-btn">
//                                     Edit Item
//                                 </span>
//                             </Link>
//                             <div className="info-btn view-details-btn">
//                                 View Details
//                             </div>
//                         </div>
//                     </div>
//                     <h2 className="product-price">{`$${updateTotalCakeCost()}`}</h2>
//                 </div> */}
//             </section>
//         );
//     }
// }

// export default Order;

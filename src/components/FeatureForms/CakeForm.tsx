import { inject, observer } from "mobx-react";
// import React from "react";
// import { ProductCategories } from "../../store/constants/Enums";
// import { GlobalStateStore } from "../../store/GlobalStateStore";

// interface ICakeForm {
//     store?: GlobalStateStore;
// }

// @inject("store")
// @observer
// class CakeForm extends React.Component<ICakeForm> {
//     render() {
//         const { store } = this.props;
//         const { UserStore, CakeStore, CupcakeStore, CookieStore } = store!;
//         const category = store!.CategoryStore.category;
//         if (category === ProductCategories.CAKES) {
//             const { base, flavors, details } = CakeStore;
//             return (
//                 <form id="cake-form">
//                     <input type="text" value={store!.UserStore.firstName} />
//                     <input type="text" value={store!.UserStore.lastName} />
//                     <input type="text" value={store!.UserStore.email} />
//                 </form>
//             );
//         }
//     }
// }

// export default CakeForm;

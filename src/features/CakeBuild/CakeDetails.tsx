// External Dependencies
import { inject, observer } from "mobx-react";
import React from "react";
import {
    DeliveryOption,
    Occasion,
    ProductCategories,
    Recipient,
} from "../../store/constants/Enums";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import DatePicker from "react-datepicker";

//styles
import "../../styles/CakeBuildStyles/Details.scss";
import "react-datepicker/dist/react-datepicker.css";
import Details from "../../components/Details";

interface ICakeDetailsProps {
    store?: GlobalStateStore;
}
interface ICakeDetailsState {
    arrivalDate: Date;
    occasionDate: Date;
}
@inject("store")
@observer
class CakeDetails extends React.Component<
    ICakeDetailsProps,
    ICakeDetailsState
> {
    constructor(props: ICakeDetailsProps) {
        super(props);
        this.state = {
            arrivalDate: new Date(),
            occasionDate: new Date(),
        };
    }

    render() {
        return (
            <>
                <Details category={ProductCategories.CAKES} />
            </>
        );
    }

    // render() {
    //     //main
    //     return (
    //         <section className="details-cake-details-container">
    //             <h3>Cake Details</h3>
    //             <hr />
    //             <div className="details-cake-make-container">
    //                 <h5 className="details-title">
    //                     When Do Your Need Your Cake?
    //                 </h5>
    //                 <section className="cake-calendar-container">
    //                     {/* TODO: Create local state to get Date String and cast it to GlobalStateStore */}
    //                     {/* <DatePicker
    //                         selected={this.state.arrivalDate}
    //                         onChange={(date) => this.getArrivalDate(date!)}
    //                     /> */}
    //                 </section>
    //             </div>
    //             <div className="details-cake-make-container">
    //                 <h5 className="details-title">When Is The Occasion?</h5>
    //                 <section className="cake-calendar-container">
    //                     {/* TODO: Create local state to get Date String and cast it to GlobalStateStore */}
    //                     {/* <DatePicker
    //                         closeOnScroll={true}
    //                         selected={this.state.occasionDate}
    //                         onChange={(date) => this.getOccasionDate(date!)}
    //                     /> */}
    //                 </section>
    //             </div>
    //             <div className="details-cake-make-container">
    //                 <h5 className="details-title">Pickup Or Delivery?</h5>
    //                 <div className="details-checkbox-container">
    //                     <form
    //                         name="delivery-option"
    //                         className="cake-delivery-option-form"
    //                         action=""
    //                     >
    //                         <label
    //                             className="cake-delivery-option-label"
    //                             htmlFor="deliveryOption"
    //                         >
    //                             Pickup
    //                         </label>
    //                         <input
    //                             // onChange={(e) => handleDeliveryOption(e)}
    //                             name="delivery-option"
    //                             type="radio"
    //                             value={DeliveryOption.PICKUP}
    //                         />

    //                         <label
    //                             className="cake-delivery-option-label"
    //                             htmlFor="deliveryOption"
    //                         >
    //                             Delivery
    //                         </label>
    //                         <input
    //                             // onChange={(e) => handleDeliveryOption(e)}
    //                             name="delivery-option"
    //                             type="radio"
    //                             value={DeliveryOption.DELIVERY}
    //                         />
    //                     </form>
    //                 </div>
    //             </div>
    //             <div className="details-cake-make-container">
    //                 <h5 className="details-title">What Is The Cake For?</h5>
    //                 <form action="">
    //                     <select
    //                         // onChange={(e) => handleOccasion(e)}
    //                         className="details-cake-size-dropdown"
    //                         name="cake-size-dropdown"
    //                     >
    //                         {(
    //                             Object.keys(Occasion) as Array<
    //                                 keyof typeof Occasion
    //                             >
    //                         ).map((key) => {
    //                             if (Occasion[key] === Occasion.NONE) {
    //                                 return (
    //                                     <option key={key} value="">
    //                                         Choose One
    //                                     </option>
    //                                 );
    //                             } else {
    //                                 return (
    //                                     <option key={key} value={Occasion[key]}>
    //                                         {Occasion[key]}
    //                                     </option>
    //                                 );
    //                             }
    //                         })}
    //                     </select>
    //                 </form>
    //             </div>

    //             <div
    //                 id="details-checkbox-wrapper"
    //                 className="details-cake-make-container"
    //             >
    //                 <h5 className="details-title">Who Is The Cake For?</h5>
    //                 <div className="details-textbox-container">
    //                     <form action="">
    //                         <textarea
    //                             // onChange={(e) => handleRecipient(e)}
    //                             className="details-cake-size-dropdown"
    //                             name="cake-recipient"
    //                             placeholder="Enter Here..."
    //                         />
    //                     </form>
    //                 </div>
    //             </div>
    //             <div className="details-cake-make-container">
    //                 <h5 className="details-title">
    //                     List Preferred Colors For Cake
    //                 </h5>
    //                 <div className="details-textbox-container">
    //                     <form action="">
    //                         <textarea
    //                             // onChange={(e) => handlePreferredColor(e)}
    //                             className="details-cake-size-dropdown"
    //                             name="cake-colors"
    //                             placeholder="Enter Colors Here..."
    //                         />
    //                     </form>
    //                 </div>
    //             </div>
    //             <div
    //                 id="details-cake-inscription-container"
    //                 className="details-cake-make-container"
    //             >
    //                 <h5 className="details-title">
    //                     Write Cake Inscription (If any)
    //                 </h5>
    //                 <div className="details-textbox-container">
    //                     <form action="">
    //                         <textarea
    //                             // onChange={(e) => handleInscription(e)}
    //                             className="details-cake-size-dropdown"
    //                             name="cake-colors"
    //                             placeholder="Enter Inscription Here..."
    //                             maxLength={80}
    //                         />
    //                     </form>
    //                 </div>
    //             </div>
    //             <div
    //                 id="details-photo-example-container"
    //                 className="details-cake-make-container"
    //             >
    //                 <h5 className="details-title">Photo Example Of Cake</h5>
    //                 <div className="details-textbox-container">
    //                     <form action="">
    //                         <input
    //                             className="details-file-option"
    //                             type="file"
    //                             name="cake-colors"
    //                             maxLength={80}
    //                             // onChange={(e) => handlePhotoExample(e)}
    //                         />
    //                         <aside>
    //                             Upload any photo example <br />
    //                             of a cake design that you would like to copy for
    //                             your cake. <br />
    //                             You may also send a link in the field below.
    //                         </aside>
    //                         <textarea
    //                             // onChange={(e) => handleLinkExample(e)}
    //                             name="photo-link"
    //                             id="details-photo-link"
    //                             placeholder="Enter Link Of Cake Design Example Here..."
    //                             maxLength={450}
    //                         ></textarea>
    //                     </form>
    //                 </div>
    //             </div>
    //             <div
    //                 id="details-cake-inscription-container"
    //                 className="details-cake-make-container"
    //             >
    //                 <h5 className="details-title">
    //                     Additional Design/Theme Details
    //                 </h5>
    //                 <div className="details-textbox-container">
    //                     <form action="">
    //                         <textarea
    //                             // onChange={(e) => handleAdditionalDetails(e)}
    //                             name="extra-details"
    //                             id="details-extra-details"
    //                             placeholder="Enter Details Here..."
    //                         ></textarea>
    //                     </form>
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }
}

export default CakeDetails;

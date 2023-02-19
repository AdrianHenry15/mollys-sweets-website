import { inject, observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { ProductCategories } from "../../../store/constants/Enums";
import { GlobalStateStore } from "../../../store/GlobalStateStore";

interface IEditComponentProps {
    store?: GlobalStateStore;
    toggleDropdown: boolean;
}

interface IEditComponentState {
    toggleDropdown: boolean;
}

@inject("store")
@observer
export class EditComponent extends React.Component<
    IEditComponentProps,
    IEditComponentState
> {
    constructor(props: IEditComponentProps) {
        super(props);

        this.state = {
            toggleDropdown: false,
        };
    }

    private renderEditLink = (): string => {
        const category = this.props.store!.CategoryStore.category;
        if (category === ProductCategories.CAKES) {
            return "/build-your-cake";
        } else if (category === ProductCategories.CUPCAKES) {
            return "/choose-your-cupcakes";
        } else {
            return "/choose-your-cookies";
        }
    };
    render() {
        return (
            <>
                {this.props.toggleDropdown && (
                    <Link to={this.renderEditLink()}>
                        <span className="edit-label feather-label">
                            Edit Details
                        </span>
                    </Link>
                )}
            </>
        );
    }
}

export default EditComponent;

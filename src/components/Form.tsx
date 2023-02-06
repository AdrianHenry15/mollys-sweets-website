import * as React from "react";

export interface IValues {
    [key: string]: any;
}

// ALL FORM FIELD PROPERTIES
interface IFieldProps {
    // name of the field
    name: string;

    // text to display in field
    label: string;

    /* union type for type of editor to display
        - needs default value
    */
    type?: "Text" | "Email" | "Select" | "TextArea" | "Radio";

    /* defines list of options to display in the drop-down
        - only applicable to SELECT editor type
        - needs default value
    */
    options?: string[];
}

// same types as state
interface IFormContext {
    values: IValues;
    // reference to form context method so that the Field component can access it
    setValue?: (fieldName: string, value: any) => void;
}

/* Context component for Field component
    We keep the TypeScript compiler happy by setting the initial context value to an empty literal value.
*/
const FormContext = React.createContext<IFormContext>({
    values: {},
});

interface IFormProps {
    children: React.ReactNode;
    defaultValues: IValues;
}

interface IFormState {
    values: IValues;
}

export class Form extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);

        this.state = {
            values: props.defaultValues,
        };
    }

    private setValue = (fieldName: string, value: any) => {
        // new state created for values object
        const newValues = { ...this.state.values, [fieldName]: value };

        // new values set in state
        this.setState({ values: newValues });
    };

    // RENDER
    public render() {
        const context: IFormContext = {
            values: this.state.values,
            setValue: this.setValue,
        };
        return (
            // PROVIDES context for CONSUMER to take in
            <FormContext.Provider value={context}>
                <form className="form" noValidate={true}>
                    {this.props.children}
                </form>
            </FormContext.Provider>
        );
    }

    // FIELD COMPONENT FOR FORM
    public static Field: React.FC<IFieldProps> = (props) => {
        // destructure from props object
        const { name, label, type, options } = props;

        // invoke setValue method
        const handleChange = (
            e:
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLTextAreaElement>
                | React.ChangeEvent<HTMLSelectElement>,
            context: IFormContext
        ) => {
            // checks that the setValue method is not undefined
            if (context.setValue) {
                console.log(props.name);
                context.setValue(props.name, e.currentTarget.value);
            }
        };
        return (
            // CONSUMES context from PROVIDER
            <FormContext.Consumer>
                {(context) => (
                    <div className="form-group">
                        {/* label rendered just before the input inside the div container, 
                            with the htmlFor attribute of the label referencing the id of the input. 
                        */}
                        <label htmlFor={name}>{label}</label>
                        {(type === "Text" ||
                            type === "Email" ||
                            type === "Radio") && (
                            <input
                                type={type?.toLowerCase()}
                                id={name}
                                value={context.values[name]}
                                onChange={(e) => handleChange(e, context)}
                            />
                        )}
                        {type === "TextArea" && (
                            <textarea
                                id={name}
                                value={context.values[name]}
                                onChange={(e) => handleChange(e, context)}
                            />
                        )}
                        {/* We render a select tag, 
                             containing the options specified by using the map function in the options array prop. 
                             Note that we give each option a unique key attribute to keep React happy when detecting any changes to the options. 
                        */}
                        {type === "Select" && (
                            <select
                                value={context.values[name]}
                                onChange={(e) => handleChange(e, context)}
                            >
                                {options &&
                                    options.map((option) => (
                                        <option key={option}>{option}</option>
                                    ))}
                            </select>
                        )}
                    </div>
                )}
            </FormContext.Consumer>
        );
    };
}

/* default for field type prop
    - default type will be text-based-input
 */
Form.Field.defaultProps = {
    type: "Text",
};

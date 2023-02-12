import { inject, observer } from "mobx-react";
import * as React from "react";
import "../styles/ComponentStyles/Form.scss";

// same types as state
interface IFormContext {
    errors: IErrors;
    values: IValues;
    // reference to form context method so that the Field component can access it
    setValue?: (fieldName: string, value: any) => void;
    validate?: (fieldName: string, value: any) => void;
}

/* Context component for Field component
    We keep the TypeScript compiler happy by setting the initial context value to an empty literal value.
*/
const FormContext = React.createContext<IFormContext>({
    errors: {},
    values: {},
});

export interface ISubmitResult {
    success: boolean;
    errors?: IErrors;
}

// The errors state is an indexable key/value type where the key is the field name and the value is an array of validation error messages.
interface IErrors {
    [key: string]: string[];
}

// takes in field name, values for the whole form, and an optional argument specific to the function
// A string containing the validation error message will be returned.
// If the field is valid, a blank string will be returned.
export type Validator = (
    fieldName: string,
    values: IValues,
    args?: any
) => string;

/*
    We export the function so that it can be implemented in any other components later on. 
    The function checks whether the field value is undefined, null, or an empty string 
    and if so, it returns a 'This must be populated' validation error message.
    If the field value isn't undefined, null, or an empty string, 
    then an empty string is returned to indicate the value is valid.
*/
export const required: Validator = (
    fieldName: string,
    values: IValues,
    args?: any
): string =>
    values[fieldName] === undefined ||
    values[fieldName] === null ||
    values[fieldName] === ""
        ? "This must be populated"
        : "";

/*
    The function checks whether the length of the field value is less than the length argument, 
    and if so it returns a validation error message. 
    Otherwise, an empty string is returned to indicate the value is valid.
*/
export const minLength: Validator = (
    fieldName: string,
    values: IValues,
    length: number
): string =>
    values[fieldName] && values[fieldName].length < length
        ? `This must be at least ${length} characters`
        : "";

/*
    A validation rule contains the validation function of type Validator, 
    and an argument to pass into the validation function.
*/
interface IValidation {
    validator: Validator;
    arg?: any;
}

interface IValidationProp {
    [key: string]: IValidation | IValidation[];
}

export interface IValues {
    [key: string]: any;
}

// ALL FORM FIELD PROPERTIES
interface IFieldProps {
    // name of the form field
    name: string;

    // text to display in form field
    label: string;

    //union type for type of editor to display for form field that needs a default value
    type?: "Text" | "Email" | "Select" | "TextArea" | "Radio";

    /* defines list of options to display in the drop-down
        - only applicable to SELECT editor type
        - needs default value
    */
    options?: string[];
}

interface IFormProps {
    children: React.ReactNode;
    defaultValues: IValues;
    /*
        The validationRules prop is an indexable key/value type, 
        where the key is the field name and the value is one or more validation rules of type IValidation.
    */
    validationRules: IValidationProp;
    onSubmit: (values: IValues) => Promise<ISubmitResult>;
}

interface IFormState {
    values: IValues;
    errors: IErrors;
    submitting: boolean;
    submitted: boolean;
}

@inject("store")
@observer
export class Form extends React.Component<IFormProps, IFormState> {
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
                context.setValue(props.name, e.currentTarget.value);
            }
        };

        // trigger validation rules when field loses focus
        const handleBlur = (
            e:
                | React.FocusEvent<HTMLInputElement>
                | React.FocusEvent<HTMLTextAreaElement>
                | React.FocusEvent<HTMLSelectElement>,
            context: IFormContext
        ) => {
            if (context.validate) {
                context.validate(props.name, e.currentTarget.value);
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
                                type={type.toLowerCase()}
                                id={name}
                                value={context.values[name]}
                                onChange={(e) => handleChange(e, context)}
                                onBlur={(e) => handleBlur(e, context)}
                            />
                        )}
                        {type === "TextArea" && (
                            <textarea
                                id={name}
                                value={context.values[name]}
                                onChange={(e) => handleChange(e, context)}
                                onBlur={(e) => handleBlur(e, context)}
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
                                onBlur={(e) => handleBlur(e, context)}
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
    constructor(props: IFormProps) {
        super(props);
        /*
            The defaultValues prop contains all the field names in its keys. 
            We iterate through the defaultValues keys, 
            setting the appropriate errors key to an empty array. 
            As a result, when the Form component initializes, 
            none of the fields contain any validation error messages
        */
        const errors: IErrors = {};
        Object.keys(props.defaultValues).forEach((fieldName) => {
            errors[fieldName] = [];
        });
        this.state = {
            errors,
            submitted: false,
            submitting: false,
            values: props.defaultValues,
        };
    }

    // RENDER
    public render() {
        // the validation errors are in the form state, and also in the form context for the Field component to access.
        const context: IFormContext = {
            errors: this.state.errors,
            values: this.state.values,
            setValue: this.setValue,
            validate: this.validate,
        };
        return (
            // PROVIDES context for CONSUMER to take in
            <FormContext.Provider value={context}>
                <form
                    className="form"
                    noValidate={true}
                    onSubmit={this.handleSubmit}
                >
                    {this.props.children}
                    <div className="form-group">
                        <button
                            disabled={
                                this.state.submitting || this.state.submitted
                            }
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </FormContext.Provider>
        );
    }

    private validateForm(): boolean {
        const errors: IErrors = {};
        let haveError: boolean = false;
        //iterates through the form fields
        Object.keys(this.props.defaultValues).map((fieldName) => {
            //calls 'validate' function and updates state with latest validation errors
            errors[fieldName] = this.validate(
                fieldName,
                this.state.values[fieldName]
            );
            if (errors[fieldName].length > 0) {
                return (haveError = true);
            } else {
                return errors[fieldName];
            }
        });
        // return whether there are errors or not
        this.setState({ errors });
        return !haveError;
    }

    private handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //submitting state is set to true if you are filling form out
        // asynchronous call to onSubmit function
        // when onSubmit is finished,
        // ...any errors that are apparent are set
        // ...if there are no errors the submitted response is successful
        // ...submitting state is set to false to show that submission process is finished
        if (this.validateForm()) {
            this.setState({ submitting: true });
            const result = await this.props.onSubmit(this.state.values);
            this.setState({
                errors: result.errors || {},
                submitted: result.success,
                submitting: false,
            });
        }
        console.log(this.state.values);
    };

    private setValue = (fieldName: string, value: any) => {
        // new state created for values object
        const newValues = { ...this.state.values, [fieldName]: value };

        // new values set in state
        this.setState({ values: newValues });
    };

    private validate = (fieldName: string, value: any): string[] => {
        const rules = this.props.validationRules[fieldName];
        const errors: string[] = [];
        if (Array.isArray(rules)) {
            rules.forEach((rule) => {
                const error = rule.validator(
                    fieldName,
                    this.state.values,
                    rule.arg
                );
                if (error) {
                    errors.push(error);
                }
            });
        } else {
            if (rules) {
                const error = rules.validator(
                    fieldName,
                    this.state.values,
                    rules.arg
                );
                if (error) {
                    errors.push(error);
                }
            }
        }
        const newErrors = { ...this.state.errors, [fieldName]: errors };
        this.setState({ errors: newErrors });
        return errors;
    };
}

/* default for field type prop
    - default type will be text-based-input
 */
Form.Field.defaultProps = {
    type: "Text",
};

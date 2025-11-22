import { Form, Field } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Checkbox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import "./RegistrationForm.css";
import "@progress/kendo-theme-default/dist/all.css";
// Validation
const required = (value) => value ? "" : "This field is required";

const genderOptions = ["Male", "Female", "Other"];

const RegistrationForm = () => {

    const handleSubmit = (dataItem) => {
        console.log("Form Data:", dataItem);
        alert("Registration Successful!");
    };

    return (
        <div className="flex flex-col items-center justify-center h-full min-h-screen main min-w-screen">
            <div className="max-md:w-[80%] w-[480px] items-center mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10 h-[510px]">
                <h2 className="mb-5 text-2xl font-bold text-center text-[#2464E4]">Registration Form</h2>
                <Form
                    onSubmit={handleSubmit}
                    render={(formRenderProps) => (
                        <form onSubmit={formRenderProps.onSubmit} className="space-y-4">
                            <div className="flex flex-col w-full mb-10 space-y-2">
                                <Field label="Full Name" name="fullName" validator={required} component={Input} />
                                <Field label="Email" name="email" type="email" validator={required} component={Input} />
                                <Field label="Password" name="password" type="password" validator={required} component={Input} />
                                <Field label="Gender" name="gender" data={genderOptions} validator={required} component={DropDownList} />
                                <Field name="dob" label="Date of Birth" validator={required} component={DatePicker}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Field label="I agree to the Terms and Conditions" name="terms" validator={required} component={Checkbox} />
                                <Button type="submit" primary={true} className="mt-4">Register</Button>
                            </div>

                        </form>

                    )}
                />
            </div>
        </div>
    );
};

export default RegistrationForm;

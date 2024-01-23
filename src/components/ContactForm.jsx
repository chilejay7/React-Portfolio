import { useState } from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
    // The useState hook is set to an object with the values for each of the input variables set to empty strings.
    const [formData, setFormData] = useState({ fullName: "", email: "", message:"" });
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ fullName: "", email: "", message:"" });


    // The handleChange function is set to accept an event argument and will handle the onChange events of the input fields.
    // Each time the input field is changed it will trigger the function to update the value in state.
    const handleChange = (event) => {
        console.log(fullName, email, message);

        // This stores the name attribute of the input field and the new value of that field.
        const changedField = event.target.name;
        const newValue = event.target.value;
        console.log(changedField, newValue);

        // This calls the function in state that is used to update the object's values.
        // currData is the data currently in state.
        // State must be changed this way because it depends on the current value in state and is needed to allow React to render the data properly.
        setFormData(currData => {
            console.log(`The data currently in state is: ${Object.entries(currData)}`);
            
            // Bracket notation is used here to allow the use of a variable to access the object's property and set the new value of the entry.
            console.log(`This is the current data changed field: ${currData[changedField]}`);
            currData[changedField] = newValue;
            console.log(`The updated data in state is: ${Object.entries(currData).forEach(([key, value]) => console.log(key, value))}`)

            // Using the spread operator is best practice in React when updating state based on previous value.
            // This returns a copy of our current object using spread with the current data.
            return{
                ...currData,
                [changedField]: newValue,
            };
        } )
    };

    // const handleSubmit = (event) => {
    //     console.log('The contact information has beeen submitted.');

    //     // This prevents the page from reloading and uses setFormData to reset the information in state and clear the form.
    //     event.preventDefault();
    //     setFormData({ fullName: "", email: "", message:"" });
    // }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const handleForm = (data) => {
        console.log('Thank you for contacting me.  Your form has been submitted.' );
        console.log(data);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "contact-form": "contact", ...data })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
        reset();
    }

    const formOptions = {
        fullName: { required: "Please enter your name. This field cannot be blank." },
        email: { required: "The email field cannot be blank." },
        message: { required: "Please enter your message or questions for the developer.  This field cannot be blank." }
    }

    return (

        // The netlify attribute has been added to use netlify's built-in form detection and handling.
        // The documentation can be found at https://docs.netlify.com/forms/setup/
        // Form submissions should be received in the netlify dashboard.
        // <form name="contact-form" className="form" onSubmit={handleSubmit} method="post">
        <form name="contact-form" className="form" onSubmit={handleSubmit(handleForm)} method="POST">

            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
                <label htmlFor="fullName">Name</label>
                {/* <input type="text" className="form-control" id="fullName" placeholder="Name" name="fullName" value={ formData.fullName } onChange={ handleChange }/> */}
                <input type="text" className="form-control" id="fullName" placeholder="Name" name="fullName" {...register("fullName", formOptions.fullName)} />
                <small className="text-danger">
                    { errors?.fullName && errors.fullName.message }
                </small>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email address</label>
                {/* <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={ formData.email } onChange={ handleChange } /> */}
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" {...register("email", formOptions.email)}  />
                <small className="text-danger">
                    { errors?.email && errors.email.message }
                </small>
            </div>
            
            <div className="form-group">
                <label htmlFor="message">Message</label>
                {/* <textarea className="form-control" id="message" rows="3" placeholder="Enter your message here..." name="message" value={ formData.message } onChange={ handleChange }></textarea> */}
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message here..." name="message" {...register("message", formOptions.message)} ></textarea>
                <small className="text-danger">
                    { errors?.message && errors.message.message }
                </small>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default ContactForm;
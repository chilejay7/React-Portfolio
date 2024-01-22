import { useState } from "react";

function ContactForm() {
    // The useState hook is set to an object with the values for each of the input variables set to empty strings.
    const [formData, setFormData] = useState({ fullName: "", email: "", message:"" });

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
            return{...currData};
        } )
    };

    return (

        // The netlify attribute has been added to use netlify's built-in form detection and handling.
        // The documentation can be found at https://docs.netlify.com/forms/setup/
        // Form submissions should be received in the netlify dashboard.
        <form name="contact-form" action="#" className="form" netlify netlify-honeypot>
            <div className="form-group">
                <label htmlFor="fullName">Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Name" name="fullName" value={ formData.fullName } onChange={ handleChange }/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={ formData.email } onChange={ handleChange } />
               
            </div>
            
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message here..." name="message" value={ formData.message } onChange={ handleChange }></textarea>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default ContactForm;
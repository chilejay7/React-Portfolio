import ContactForm from "../../components/ContactForm";
import './ContactPage.css';

// The basic elements with the title of the page and an hr element for underline are used.
// A bootstrap form is rendered using the ContactForm component.
// Using a component allows the code to be highly modular and allows for re-use and quick adaptation of the form in other parts of the application if needed.
function ContactPage() {
    return (
        <>
        <h2 className="title">Contact Me</h2>
        <hr></hr>

        <ContactForm />
        </>
    )
}

export default ContactPage;
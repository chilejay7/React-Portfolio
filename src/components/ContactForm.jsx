function ContactForm() {
    return(
        <form id="contact-form">
            
            <div className="form-label">
            <label>Name:</label>
            </div>

            <input type="text" placeholder="Name: First and last" />
            
            <div className="form-label">
            <label>Email:</label>
            </div>

            <input type="email" placeholder="email address" />

            <div className="form-label">
            <label>Message:</label>
            </div>

            <textarea placeholder="Enter your message here..." />
        </form>
    )
}

export default ContactForm;
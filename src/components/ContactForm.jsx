function ContactForm() {
    return (
        <form id="contact-form">
            <section id="form-input">

                <div className="form-label">
                    <label>Name:</label>
                </div>

                <input type="text" placeholder="Name: First and last" />

                <div className="form-label">
                    <label>Email:</label>
                </div>

                <input type="email" placeholder="Email address" />

                <div className="form-label">
                    <label>Message:</label>
                </div>

                <textarea placeholder="Enter your message here..." />

                <div>
                    <button>Submit Contact Info</button>
                </div>
            </section>
        </form>
    )
}

export default ContactForm;
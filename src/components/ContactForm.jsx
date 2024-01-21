function ContactForm() {
    return (
        // <form id="contact-form">
        //     <section id="form-input">

        //         <div className="form-label">
        //             <label>Name:</label>
        //         </div>

        //         <input type="text" placeholder="Name: First and last" />

        //         <div className="form-label">
        //             <label>Email:</label>
        //         </div>

        //         <input type="email" placeholder="Email address" />

        //         <div className="form-label">
        //             <label>Message:</label>
        //         </div>

        //         <textarea placeholder="Enter your message here..." />

        //         <div>
        //             <button>Submit Contact Info</button>
        //         </div>
        //     </section>
        // </form>

        <form className="form">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name" />
            </div>

            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
               
            </div>
            
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message here..."></textarea>
            </div>
            <div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default ContactForm;
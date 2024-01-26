import './ResumePage.css'

// The basic elements with the title of the page and an hr element for underline are used.
// An additional component was not used for this section as an image of the resume is used to embed a link to a copy of the resume on Google Drive.
function Resume() {
    return (
        <>
            <h2 className="title">Resume</h2>
            <hr></hr>

            <section className="resume">
                <a href="https://drive.google.com/file/d/1fjvl6-kEJGEjbTdI743r2MOv_pa22EPH/view?usp=sharing" title="click to view or download a copy" target="_blank">
                    <img src="/assets/resume_image.jpg" alt="image of resume"></img>
                </a>

            </section>
        </>
    );
};

export default Resume;
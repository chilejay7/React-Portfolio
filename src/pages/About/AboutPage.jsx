import './AboutPage.css';

function AboutPage() {
    return (
        <>
            <h2 className="title">About Me</h2>
            <hr></hr>

            <section className="about">

                <p>
                    Dedicated and results-driven IT professional with over seven years of experience as a technical support analyst,
                    now seeking to leverage acquired skills and expertise to excel as a skilled full stack web and application developer.
                    Proven track record in troubleshooting and resolving complex technical issues, combined with a strong motivation for
                    continuous learning and excellent interpersonal communication skills. Eager to contribute to dynamic development
                    teams and take on challenging projects in a growth-oriented environment.
                </p>

                <p>
                    I am married and a father of three, two girls and a boy. My hobbies include sports, namely soccer. I am
                    a big fan of Tottenham Hotspur, and I have followed the English club for years. The Kansas Jayhawks are
                    also a passion of mine as I was born in Lawrence, KS, and attended the university. I also love
                    boardgames and speak Spanish.
                </p>

                <img src="/assets/family_photo.jpeg" alt="family picture"></img>

            </section>
        </>
    )
}

export default AboutPage;
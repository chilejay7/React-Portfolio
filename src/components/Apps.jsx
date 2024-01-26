// This package is imported to render the GitHub icon for each project's card.
import { SocialIcon } from "react-social-icons";

// Projects is a property that is an array of objects containing information about all of the projects passed in from PortfolioPage.jsx.
// The projects property is destructured and used in the map function to render a card for each project in the array.
function Apps({ projects }) {
    console.log(projects);

    return (
        projects.map((p) => {
            return (
                <div key={p.url} className="card">
                    <a href={p.url} title={`Click to view the deployed ${p.title}`}>
                        <img src={p.image} className="card-img-top" alt="project image" />
                        <div className="card-body">
                            <h5 className="card-title">{p.title}</h5>
                            <p className="card-text">{p.description}</p>
                        </div>
                    </a>
                    <section className="card-icons">
                        <SocialIcon url={p.github} title={p.github} />
                    </section>
                </div>
            )
        })

    );
};

export default Apps;
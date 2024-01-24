import { SocialIcon } from "react-social-icons";

function Apps({ projects }) {
    console.log(projects);

    return (
            projects.map((p) => {
                return (
                <div key={p.url} className="card">
                    <img src={p.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.description}</p>
                        <a href={p.url} className="btn btn-primary">Deployed App: {p.title}</a>
                    </div>
                    <SocialIcon url={p.github} />
                </div>
                )
            })
        
    );
};

export default Apps;
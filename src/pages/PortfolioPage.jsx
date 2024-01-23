import Apps from "../components/Apps";
import './PortfolioPage.css';

const projects = [
    {
        title: "Satellite Seeker",
        description: "The Satellite application uses the Model View Controller (MVC) paradigm to create and maintain a site for end users to track and view information related to satellites.",
        image: '/assets/satellite_seeker.gif',
        url: "https://satellite-seeker-6eb766f2c5fc.herokuapp.com/",
    },
    {
        title: "It's Always Sunny In...(Weather Forecast App)",
        description: "A client who travels often requested a weather application that was capable of providing the forecast for a given location in order to better plan trips.",
        image: "/assets/always_sunny.png",
        url: "https://chilejay7.github.io/Its-Always-Sunny-in-Weather-App/",
    },
]

function Portfolio() {
    return (
        <>
        <h2 className="title">Portfolio</h2>
        <hr></hr>

        <section className="apps">

        <Apps projects={ projects } />

        </section>

        </>
    )
}

export default Portfolio;
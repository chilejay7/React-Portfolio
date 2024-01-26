import Apps from "../../components/Apps";
import './PortfolioPage.css';

const projects = [
    {
        title: "Satellite Seeker",
        description: "The Satellite application uses the Model View Controller (MVC) paradigm to create and maintain a site for end users to track and view information related to satellites.",
        image: '/assets/satellite_seeker.gif',
        url: "https://satellite-seeker-6eb766f2c5fc.herokuapp.com/",
        github: "https://github.com/chilejay7/Satellite-Seeker",
    },
    {
        title: "It's Always Sunny In...(Weather Forecast App)",
        description: "A client who travels often requested a weather application that was capable of providing the forecast for a given location in order to better plan trips.",
        image: "/assets/always_sunny.png",
        url: "https://chilejay7.github.io/Its-Always-Sunny-in-Weather-App/",
        github: "https://github.com/chilejay7/Its-Always-Sunny-in-Weather-App",
    },
    {
        title: "TV Show Search",
        description: "This application was built using the TVMaze API. Documentation can be found by visiting the site at: https://tvmaze.com/api.",
        image: "/assets/TVShowSearch.png",
        url: "https://chilejay7.github.io/TV-Show-Search/",
        github: "https://github.com/chilejay7/TV-Show-Search",
    },
    {
        title: "E-Commerce Application (ORM)",
        description: "The E-Commerce application helps end users manage products and their associated tags and categories. This is done through a database connection that leverages the Sequelize package.",
        image: "/assets/E-Commerce.gif",
        url: "https://drive.google.com/file/d/1RK48o8reBAdbbtTA0LLLIkgNup_oXJcA/view",
        github: "https://github.com/chilejay7/E-Commerce",
    },
    {
        title: "Portfolio (HTML/CSS only)",
        description: "This is the original portfolio created using only CSS and HTML.",
        image: "/assets/UpdatedPortfolio.png",
        url: "https://chilejay7.github.io/Professional-Portfolio/",
        github: "https://github.com/chilejay7/Professional-Portfolio",
    },
    {
        title: "Friendify (Social Network API - NoSQL)",
        description: "The Friendify social networking application allows end users to share their thoughts, reactions, and maintain a list of friends",
        image: "/assets/Friendify.gif",
        url: "https://drive.google.com/file/d/1cLFRmF_TB6ei2AEgiNFzbxYYty4w9wO2/view",
        github: "https://github.com/chilejay7/Friendify-Social-Network-API-NoSQL",
    },
]

function Portfolio() {
    return (
        <>
        <h2 className="title">Portfolio</h2>
        <hr></hr>

        <section className="project-cards">

            <Apps projects={ projects } />

        </section>

        </>
    )
}

export default Portfolio;
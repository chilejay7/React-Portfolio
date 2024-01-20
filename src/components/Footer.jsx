// A style sheet for the footer element and its components is imported.
// The SocialIcons component is imported and referenced to create social media icons and links.
import './Footer.css';
import SocialIcons from './UI/SocialIcons';

// The array holds a list of urls that are passed to the SocialIcons component as a property.
const urls = [
    'https://www.linkedin.com/in/cody-burkholder-4b072848/',
    'mailto:codyburk7@gmail.com',
    'https://github.com/chilejay7',
]

function Footer() {
    // The footer is rendered and references the SocialIcons component to render the social media icons and links by passing the urls array as a property to the component.
    return(
        <footer className="footer">
            <h4>&#xa9; Cody Burkholder</h4>
            <p>Software Engineer 2024</p>

            <SocialIcons urls={urls} />
        </footer>
    );
};

export default Footer;
import { SocialIcon } from 'react-social-icons';

import './Footer.css';
import SocialIcons from './UI/SocialIcons';


const urls = [
    'https://www.linkedin.com/in/cody-burkholder-4b072848/',
    'https://github.com/chilejay7',
]

function Footer() {
    return(
        <footer className="footer">
            <h4>&#xa9; Cody Burkholder</h4>
            <p>Software Enginner 2024</p>

            <SocialIcons urls={urls} />
        </footer>
    );
};

export default Footer;
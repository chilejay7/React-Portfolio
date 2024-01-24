import { Link } from "react-router-dom";
import NavBar from "./UI/NavBar";
import { FileEarmarkRuled, House, PersonRolodex, Envelope } from "react-bootstrap-icons";
import './NavMenu.css'

// The link elements are defined in the return.
// All link elements are passed as properties to NavBar.jsx.
// Addtional svg element placeholders are included with each navigation link element.
function NavMenu() {
    return (
        <NavBar links={[

            <Link key={2} to="/portfolio"
                className="nav-link text-white">
                {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#bootsrap"></use></svg> */}
                <PersonRolodex className="bootstrap-icons" />
                Portfolio
            </Link>,

            <Link key={3} to="/contact" className="nav-link text-white">
                {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#bootsrap"></use></svg> */}
                <Envelope className="bootstrap-icons" />
                Contact
            </Link>,

            <Link key={4} to="/" className="nav-link text-white">
                {/* <svg className="bi me-2" width="16" height="16" fill="currentColor">
                    <use xlinkHref="bootstrap-icons.svg#house" />
                </svg> */}
                <House className="bootstrap-icons"/>
                About
            </Link>,

            <Link key={5} to="/resume" className="nav-link text-white">
                {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#bootsrap"></use></svg> */}
                <FileEarmarkRuled className="bootstrap-icons"/>
                Resume
            </Link>
        ]}
        />
    );
}

export default NavMenu;
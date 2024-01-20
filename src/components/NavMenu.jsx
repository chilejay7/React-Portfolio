import { Link } from "react-router-dom";
import NavBar from "./UI/NavBar";

function NavMenu() {
    return (
        <NavBar links={[
            // <Link key={1} to="/home">Home</Link>,
            <Link key={2} to="/portfolio">Portfolio</Link>,
            <Link key={3} to="/contact">Contact</Link>,
            <Link key={4} to="/">About</Link>,
            <Link key={5} to="/resume">Resume</Link>,
        ]}
        />
    );
}

export default NavMenu;
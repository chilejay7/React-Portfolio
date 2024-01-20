import { Link } from "react-router-dom";
import NavBar from "./UI/NavBar";

function NavMenu() {
    return (
        <NavBar links={[
            <Link key={1} to="/">Home</Link>,
            <Link key={2} to="/projects">Projects</Link>,
            <Link key={3} to="/contact">Contact</Link>,
            <Link key={4} to="/about">About</Link>,
        ]}
        />
    );
}

export default NavMenu;
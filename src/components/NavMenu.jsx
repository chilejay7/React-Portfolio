import { Link } from "react-router-dom";
import NavBar from "./UI/NavBar";
import { FileEarmarkRuled, House, PersonRolodex, Envelope } from "react-bootstrap-icons";
import { useState } from "react";

// The link elements are defined in the return.
// All link elements are passed as properties to NavBar.jsx.
// Addtional svg element placeholders are included with each navigation link element.
// This function is being exported to HeaderSidebar.jsx
function NavMenu() {

    let links = document.querySelectorAll(".nav-link");
    console.dir(links);

    // This function is used to clear the active className from any links.
    // The links variable is redefined when the function first runs becuse when the application first loads, the querySelectorAll statement returns an empty node list.
    // The function is called in the clickHandler
    const resetClass = () => {
        links = document.querySelectorAll(".nav-link");
        console.dir(links);
        links.forEach(link => {
            if (link.className === "nav-link text-white active") {
                link.className = "nav-link text-white"
            }
            console.log('Classes reset')
        })
    }

    // This click handler was built to leverage Bootstrap's built-in active class to highlight the active tab in the navigation menu.
    // The resetClass function is called first to reset all link classes to the base.
    // After resetting all links to the base class the event target's class is evaluated to add the active className.
    const clickHandler = (e) => {
        resetClass();
       
            e.target.className === "nav-link text-white" ? e.target.className += " active"
            : e.target.className = "nav-link text-white"      

        console.log(e.target.className);
    }

    return (
        <NavBar links={[

            <Link key={2} to="/portfolio"
                className="nav-link text-white" data-toggle="pill" onClick={clickHandler}>
                {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#bootsrap"></use></svg> */}
                <PersonRolodex className="bootstrap-icons" />
                Portfolio
            </Link>,

            <Link key={3} to="/contact" className="nav-link text-white" aria-current="page" data-toggle="pill" onClick={clickHandler}>
                {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#bootsrap"></use></svg> */}
                <Envelope className="bootstrap-icons" />
                Contact
            </Link>,

            <Link key={4} to="/" className="nav-link text-white" data-toggle="pill" onClick={clickHandler}>
                {/* <svg className="bi me-2" width="16" height="16" fill="currentColor">
                    <use xlinkHref="bootstrap-icons.svg#house" />
                </svg> */}
                <House className="bootstrap-icons"/>
                About
            </Link>,

            <Link key={5} to="/resume" className="nav-link text-white" data-toggle="pill" onClick={clickHandler}>
                {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#bootsrap"></use></svg> */}
                <FileEarmarkRuled className="bootstrap-icons"/>
                Resume
            </Link>
        ]}
        />
    );
}

export default NavMenu;
function NavBar({ links }) {
    return (
        <ul className="nav nav-pills flex-column mb-auto">
            {links.map((link) => {
                // A return is needed from within map to correctly return the values and render the elements as curly brackets are used.
                // The curly brackets remove the implicit return from the callback's arrow function.
                return (
                    <li className="nav-item">
                        {link}
                    </li>
                )
            })}
        </ul>

    )
}

export default NavBar;
function NavBar({ links }) {
    return (
        <ul className="nav nav-pills flex-column mb-auto">
            {links.map((link) => {
                // A return is needed from within map to correctly return the values and render the elements.
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
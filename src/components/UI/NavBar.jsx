function NavBar({ links }) {
    return (

        <ul className="nav nav-pills nav-justified">

            {links.map((link) =>
                <li className="nav-item">
                    {link}
                </li>
            )}

        </ul>
    )
}

export default NavBar;
function NavBar({ links }) {
    return (
        <nav className="navbar">
            <ul className="navbar">
                {links.map((link) => link)}
            </ul>
        </nav>
    )
}

export default NavBar;
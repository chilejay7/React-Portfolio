function NavBar({ links }) {
    return (
        <nav className="nav">
            <ul className="navList">
                {links.map((link) => link)}
            </ul>
        </nav>
    )
}

export default NavBar;
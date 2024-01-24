function NavBar({ links }) {
    return (
        // <nav className="nav">
        //     <ul className="navList">
        //         {links.map((link) => link)}
        //     </ul>
        // </nav>

        <ul class="nav nav-pills nav-justified">

            {links.map((link) =>
                <li class="nav-item">
                    {link}
                </li>
            )}

        </ul>
    )
}

export default NavBar;
import './HeaderSidebar.css'

function HeaderSidebar() {
    const styles = {
        width: "280px",
        // height: "vh",
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar-header" style={styles}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <img src="/assets/family_photo.jpeg" alt="" width="32" height="32" className="rounded-circle me-2" />
                <span className="fs-4">Cody Burkholder</span>
            </a>
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link active" aria-current="page">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#bootsrap"></use></svg>
                        About
                    </a>
                </li>
                <li>
                    <a href="/contact" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="/contact"></use></svg>
                        Contact
                    </a>
                </li>
                <li>
                    <a href="/portfolio" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                       Portfolio
                    </a>
                </li>
                <li>
                    <a href="/resume" className="nav-link text-white">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                        Resume
                    </a>
                </li>
            </ul>

            <hr></hr>

            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/assets/family_photo.jpeg" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>Cody</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    {/* <li><hr className="dropdown-divider"></li> */}
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderSidebar;
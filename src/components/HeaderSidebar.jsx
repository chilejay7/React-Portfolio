import NavMenu from './NavMenu';

import './HeaderSidebar.css'

function HeaderSidebar() {
    const styles = {
        width: "280px",
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar-header" style={styles}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <img src="/assets/family_photo.jpeg" alt="" width="32" height="32" className="rounded-circle me-2" />
                <span className="fs-4">Cody Burkholder</span>
            </a>
            <hr></hr>
            
            <NavMenu />

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
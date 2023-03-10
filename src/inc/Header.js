import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="topbar d-flex align-items-center">
        <nav className="navbar navbar-expand">
          <div className="mobile-toggle-menu"><i className='bx bx-menu'></i>
          </div>

          <div className="top-menu ms-auto"></div>

          <div className="user-box dropdown">
            <div
              className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/assets/images/avatars/avatar-2.png" className="user-img" alt="user avatar" />
              <div className="user-info ps-3">
                <p className="user-name mb-0">Vanilla user</p>
                <p className="designattion mb-0">Grade</p>
              </div>
            </div>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to="account/profile"><i className="bx bx-user"></i><span>Profile</span></Link>
              </li>

              <li><a className="dropdown-item" href="#"><i className="bx bx-cog"></i><span>Settings</span></a>
              </li>

              <li>
                <div className="dropdown-divider mb-0"></div>
              </li>
              <li><a className="dropdown-item" href="#"><i className='bx bx-log-out-circle'></i><span>Logout</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
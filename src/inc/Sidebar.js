import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className="sidebar-wrapper" data-simplebar="true">
      <div className="sidebar-header">
        <div>
          <img src="/assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h4 className="logo-text">VANILLA</h4>
        </div>
        <div className="toggle-icon ms-auto"><i className='bx bx-arrow-to-left'></i>
        </div>
      </div>
      {/* <!--navigation--> */}
      <ul className="metismenu" id="menu">

        <li>
          <a href="#" className="has-arrow">
            <div className="parent-icon"><i className='bx bx-home-circle'></i>
            </div>
            <div className="menu-title">Tableau</div>
          </a>
          <ul>
            <li>
              <Link to=""><i className="bx bx-right-arrow-alt"></i>Accueil</Link>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" className="has-arrow">
            <div className="parent-icon"><i className="bx bx-category"></i>
            </div>
            <div className="menu-title">Application</div>
          </a>
          <ul>
            <li>
              <a href="#"><i className="bx bx-right-arrow-alt"></i>Email</a>
            </li>
          </ul>
        </li>

        <li className="menu-label">Parametres</li>

				<li>
					<Link to="account/profile">
						<div className="parent-icon">
              <i className="bx bx-user-circle"></i>
						</div>
						<div className="menu-title">Mon profil</div>
					</Link>
				</li>
        
      </ul>
    </div>
  )
}
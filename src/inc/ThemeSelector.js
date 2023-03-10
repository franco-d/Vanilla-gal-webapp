export default function ThemeSelector() {
  return (
    <div className="switcher-wrapper">
      <div className="switcher-btn"> <i className='bx bx-cog bx-spin'></i>
      </div>
      <div className="switcher-body">
        <div className="d-flex align-items-center">
          <h5 className="mb-0 text-uppercase">THEME PERSO</h5>
          <button type="button" className="btn-close ms-auto close-switcher" aria-label="Close"></button>
        </div>
        <hr />
        <h6 className="mb-0">Style du theme</h6>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="lightmode" />
            <label className="form-check-label" htmlFor="lightmode">Clair</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="darkmode" />
            <label className="form-check-label" htmlFor="darkmode">Sombre</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="semidark" />
            <label className="form-check-label" htmlFor="semidark">Mi-Sombre</label>
          </div>
        </div>
        <hr />
        <div className="form-check">
          <input className="form-check-input" type="radio" id="minimaltheme" name="flexRadioDefault" />
          <label className="form-check-label" htmlFor="minimaltheme">Theme Minimal</label>
        </div>
        <hr />
        <h6 className="mb-0">Couleurs d'entete</h6>
        <hr />
        <div className="header-colors-indigators">
          <div className="row row-cols-auto g-3">
            <div className="col">
              <div className="indigator headercolor1" id="headercolor1"></div>
            </div>
            <div className="col">
              <div className="indigator headercolor2" id="headercolor2"></div>
            </div>
            <div className="col">
              <div className="indigator headercolor3" id="headercolor3"></div>
            </div>
            <div className="col">
              <div className="indigator headercolor4" id="headercolor4"></div>
            </div>
            <div className="col">
              <div className="indigator headercolor5" id="headercolor5"></div>
            </div>
            <div className="col">
              <div className="indigator headercolor6" id="headercolor6"></div>
            </div>
            <div className="col">
              <div className="indigator headercolor7" id="headercolor7"></div>
            </div>
            <div className="col">
              <div className="indigator headercolor8" id="headercolor8"></div>
            </div>
          </div>
        </div>
        <hr />
        <h6 className="mb-0">Couleur Navigation</h6>
        <hr />
        <div className="header-colors-indigators">
          <div className="row row-cols-auto g-3">
            <div className="col">
              <div className="indigator sidebarcolor1" id="sidebarcolor1"></div>
            </div>
            <div className="col">
              <div className="indigator sidebarcolor2" id="sidebarcolor2"></div>
            </div>
            <div className="col">
              <div className="indigator sidebarcolor3" id="sidebarcolor3"></div>
            </div>
            <div className="col">
              <div className="indigator sidebarcolor4" id="sidebarcolor4"></div>
            </div>
            <div className="col">
              <div className="indigator sidebarcolor5" id="sidebarcolor5"></div>
            </div>
            <div className="col">
              <div className="indigator sidebarcolor6" id="sidebarcolor6"></div>
            </div>
            <div className="col">
              <div className="indigator sidebarcolor7" id="sidebarcolor7"></div>
            </div>
            <div className="col">
              <div className="indigator sidebarcolor8" id="sidebarcolor8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
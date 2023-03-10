export default function Profile() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        {/* <!--breadcrumb--> */}
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">User Profile</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item">
                  <a href="#">
                    <i className="bx bx-home-alt"></i>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">User Profilep</li>
              </ol>
            </nav>
          </div>

        </div>
        {/* <!--end breadcrumb--> */}
        <div className="container">
          <div className="main-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      
                      <img src="/assets/images/avatars/avatar-2.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110" />
                      
                      <div className="mt-3">
                        <h4>Vanilla User</h4>
                        <p className="text-secondary mb-1">Titre</p>
                        <p className="text-muted font-size-sm">Addresse</p>
                        <div className="btn-group">
                          <button className="btn btn-primary">Follow</button>
                          <button className="btn btn-outline-primary">Message</button>
                        </div>
                      </div>

                    </div>
                    <hr className="my-4 mb-0" />

                    <ul className="list-group list-group-flush">

                      <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 className="mb-0">
                          <i className='bx bx-envelope bx-md'></i>
                        </h6>
                        <span className="text-secondary">Email vanilla user</span>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">

                    <h5 className="d-flex align-items-center mb-3">
                      <i className='bx bxs-user-pin'></i> 
                      Identité
                    </h5>

                    <hr className="my-4 mt-0" />

                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Nom d'utilisateur</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control" placeholder="John Doe" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">E-mail</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Telephone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control" placeholder="(239) 816-9029" />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Adresse</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control" placeholder="Bay Area, San Francisco, CA" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-9 text-secondary">
                        <button type="button" className="btn btn-primary btn-sm px-4">
                          <i className='bx bxs-save'></i> Enregistrer
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        
                        <h5 className="d-flex align-items-center mb-3">
                          <i className='bx bxs-shield'></i>
                          Securité & Mot de passe
                        </h5>
                        
                        <hr className="my-4 mt-0" />

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <small className="mb-0">Ancien mot de passe</small>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input type="password" className="form-control" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <small className="mb-0">Nouveaux mot de passe</small>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input type="password" className="form-control" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <small className="mb-0">Confirmé le mot de passe</small>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <input type="password" className="form-control" />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-3"></div>
                          <div className="col-sm-9 text-secondary">
                            <button type="button" className="btn btn-primary btn-sm px-4">
                              <i className='bx bxs-save'></i> Enregistrer
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

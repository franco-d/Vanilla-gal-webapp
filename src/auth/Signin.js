import "./css/auth.css";
export default function Signin() {

  const hideShowPassword=(e)=>{
    e.preventDefault();
    var show_hide_password = document.querySelector("#show_hide_password input");
    var show_hide_password_i = document.querySelector("#show_hide_password i");
    if(show_hide_password.type === "text"){
      show_hide_password.setAttribute('type', 'password');
      show_hide_password_i.classList.add("bx-hide");
      show_hide_password_i.classList.remove("bx-show");
    }else if(show_hide_password.type === "password"){
      show_hide_password.setAttribute('type', 'text');
      show_hide_password_i.classList.remove("bx-hide");
      show_hide_password_i.classList.add("bx-show");
    }
  } 
  return (
    <div className="wrapper">
      <div className="section-authentication-cover">
        <div className="">
          <div className="row g-0">

            <div
              className="col-12 col-xl-7 col-xxl-8 auth-cover-left align-items-center justify-content-center d-none d-xl-flex background-signin shadow"
            >

              <div className="card shadow-none bg-transparent shadow-none rounded-0 mb-0 border-0">
                <div className="card-body d-none">
                  <img
                    src="/assets/images/login-images/loginv-2.svg"
                    className="img-fluid auth-img-cover-login" width="650"
                    alt="login-cover"
                  />
                </div>
              </div>

            </div>

            <div className="col-12 col-xl-5 col-xxl-4 auth-cover-right align-items-center justify-content-center">

              <div className="card rounded-0 m-3 shadow-none bg-transparent mb-0 border-0">
                <div className="card-body p-sm-5">
                  <div className="">
                    <div className="mb-3 text-center">
                      <img src="/assets/images/logo-icon.png" width="60" alt="" />
                    </div>
                    <div className="text-center mb-4">
                      <h5 className="">Vanilla</h5>
                      <p className="mb-0">Please log in to your account</p>
                    </div>
                    <div className="form-body">
                      <form className="row g-3">
                        <div className="col-12">
                          <label htmlFor="inputEmailAddress" className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmailAddress"
                            placeholder="jhon@example.com"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="inputChoosePassword" className="form-label">Password</label>
                          <div className="input-group" id="show_hide_password">
                            <input
                              type="password"
                              className="form-control border-end-0"
                              id="inputChoosePassword"
                              placeholder="Enter Password"
                            />
                            <button onClick={hideShowPassword} className="input-group-text bg-transparent" type="button">
                              <i className="bx bx-hide"></i>
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                          </div>
                        </div>
                        <div className="col-md-6 text-end"> <a href="authentication-forgot-password.html">Forgot Password
                          ?</a>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                          </div>
                        </div>

                      </form>
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
}
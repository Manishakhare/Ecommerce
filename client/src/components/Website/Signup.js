import React, { Component } from 'react'

export class Signup extends Component {



  render() {
    return (
      <div><div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Responsive Bootstrap 5 admin template and web Application ui kit." />
      <meta name="keyword" content="ALUI, Bootstrap 5, ReactJs, Angular, Laravel, VueJs, ASP .Net, Admin Dashboard, Admin Theme" />
      <title>:: ALUI :: Hospital Management</title>
      <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Favicon*/}
      {/* project css file  */}
      <link rel="stylesheet" href="../../../assets/css/al.style.min.css" />
      {/* project layout css file */}
      <link rel="stylesheet" href="../../../assets/css/layout.d.min.css" />
      <div id="layout-d" className="theme-cyan">
        {/* main body area */}
        <div className="main auth-div p-2 py-3 p-xl-5">
          {/* Body: Body */}
          <div className="body d-flex p-0 p-xl-5">
            <div className="container-fluid">
              <div className="row g-0">
                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                  <div style={{maxWidth: '25rem'}}>
                    <div className="text-center mb-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="4rem" viewBox="0 0 64 80" fill="none">
                        <path className="fill-primary" d="M58.8996 22.7L26.9996 2.2C23.4996 -0.0999999 18.9996 0 15.5996 2.5C12.1996 5 10.6996 9.2 11.7996 13.3L15.7996 26.8L3.49962 39.9C-3.30038 47.7 3.79962 54.5 3.89962 54.6L3.99962 54.7L36.3996 78.5C36.4996 78.6 36.5996 78.6 36.6996 78.7C37.8996 79.2 39.1996 79.4 40.3996 79.4C42.9996 79.4 45.4996 78.4 47.4996 76.4C50.2996 73.5 51.1996 69.4 49.6996 65.6L45.1996 51.8L58.9996 39.4C61.7996 37.5 63.3996 34.4 63.3996 31.1C63.4996 27.7 61.7996 24.5 58.8996 22.7ZM46.7996 66.7V66.8C48.0996 69.9 46.8996 72.7 45.2996 74.3C43.7996 75.9 41.0996 77.1 37.9996 76L5.89961 52.3C5.29961 51.7 1.09962 47.3 5.79962 42L16.8996 30.1L23.4996 52.1C24.3996 55.2 26.5996 57.7 29.5996 58.8C30.7996 59.2 31.9996 59.5 33.1996 59.5C35.0996 59.5 36.9996 58.9 38.6996 57.8C38.7996 57.8 38.7996 57.7 38.8996 57.7L42.7996 54.2L46.7996 66.7ZM57.2996 36.9C57.1996 36.9 57.1996 37 57.0996 37L44.0996 48.7L36.4996 25.5V25.4C35.1996 22.2 32.3996 20 28.9996 19.3C25.5996 18.7 22.1996 19.8 19.8996 22.3L18.2996 24L14.7996 12.3C13.8996 8.9 15.4996 6.2 17.3996 4.8C18.4996 4 19.8996 3.4 21.4996 3.4C22.6996 3.4 23.9996 3.7 25.2996 4.6L57.1996 25.1C59.1996 26.4 60.2996 28.6 60.2996 30.9C60.3996 33.4 59.2996 35.6 57.2996 36.9Z" fill="black" />
                      </svg>
                    </div>
                    <div className="mb-5">
                      <h2 className="color-900">Build digital products with:</h2>
                    </div>
                    {/* List Checked */}
                    <ul className="mb-5">
                      <li className="mb-4">
                        <span className="d-block fw-bold">All-in-one tool</span>
                        <span className="text-muted">Build, run, and scale your apps - end to end</span>
                      </li>
                      <li>
                        <span className="d-block fw-bold">Easily add &amp; manage your services</span>
                        <span className="text-muted">It brings together your tasks, projects, timelines, files and more</span>
                      </li>
                    </ul>
                    <div className="ms-4 ps-2">
                      <a href="#" className="me-2 text-muted"><i className="fa fa-facebook-square fa-lg" /></a>
                      <a href="#" className="me-2 text-muted"><i className="fa fa-github-square fa-lg" /></a>
                      <a href="#" className="me-2 text-muted"><i className="fa fa-linkedin-square fa-lg" /></a>
                      <a href="#" className="me-2 text-muted"><i className="fa fa-twitter-square fa-lg" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                  <div className="w-100 p-4 p-md-5 card border-0" style={{maxWidth: '32rem'}}>
                    {/* Form */}
                    <form className="row g-1 p-0 p-md-4">
                      <div className="col-12 text-center mb-5">
                        <h1>Create your account</h1>
                        <span>Free access to our dashboard.</span>
                      </div>
                      <div className="col-12">
                        <div className="mb-2">
                          <label className="form-label"> Name</label>
                          <input type="text" className="form-control form-control-lg" placeholder="John" />
                        </div>
                      </div>
                    
                      <div className="col-12">
                        <div className="mb-2">
                          <label className="form-label">Email address</label>
                          <input type="email" className="form-control form-control-lg" placeholder="name@example.com" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-2">
                          <label className="form-label">Password</label>
                          <input type="password" className="form-control form-control-lg" placeholder="8+ characters required" />
                        </div>
                      </div>
                   
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            I accept the <a href="#" title className="text-primary">Terms and Conditions</a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12 text-center mt-4">
                        <button type="submit" className="btn btn-lg btn-block btn-dark lift text-uppercase">SIGN UP</button>
                      </div>
                      <div className="col-12 text-center mt-4">
                        <span className="text-muted">Already have an account? <a href="props.history.push('/second');">Sign in here</a></span>
                      </div>
                    </form>
                    {/* End Form */}
                  </div>
                </div>
              </div> {/* End Row */}
            </div>
          </div>
        </div>
      </div>
      {/* Jquery Core Js */}
      {/* Jquery Page Js */}
    </div>
    </div>
    )
  }
}

export default Signup
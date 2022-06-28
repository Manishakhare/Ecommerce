import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <div >
  {/* Navigation */}
  <div className="header fixed-top shadow">
    <nav className="navbar navbar-light bg-dark py-2 px-2">
      <div className="container-fluid">
        {/* Brand */}
        <a href="index.html" className="me-3 me-lg-4 brand-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 64 80" fill="none">
            <path d="M58.8996 22.7L26.9996 2.2C23.4996 -0.0999999 18.9996 0 15.5996 2.5C12.1996 5 10.6996 9.2 11.7996 13.3L15.7996 26.8L3.49962 39.9C-3.30038 47.7 3.79962 54.5 3.89962 54.6L3.99962 54.7L36.3996 78.5C36.4996 78.6 36.5996 78.6 36.6996 78.7C37.8996 79.2 39.1996 79.4 40.3996 79.4C42.9996 79.4 45.4996 78.4 47.4996 76.4C50.2996 73.5 51.1996 69.4 49.6996 65.6L45.1996 51.8L58.9996 39.4C61.7996 37.5 63.3996 34.4 63.3996 31.1C63.4996 27.7 61.7996 24.5 58.8996 22.7ZM46.7996 66.7V66.8C48.0996 69.9 46.8996 72.7 45.2996 74.3C43.7996 75.9 41.0996 77.1 37.9996 76L5.89961 52.3C5.29961 51.7 1.09962 47.3 5.79962 42L16.8996 30.1L23.4996 52.1C24.3996 55.2 26.5996 57.7 29.5996 58.8C30.7996 59.2 31.9996 59.5 33.1996 59.5C35.0996 59.5 36.9996 58.9 38.6996 57.8C38.7996 57.8 38.7996 57.7 38.8996 57.7L42.7996 54.2L46.7996 66.7ZM57.2996 36.9C57.1996 36.9 57.1996 37 57.0996 37L44.0996 48.7L36.4996 25.5V25.4C35.1996 22.2 32.3996 20 28.9996 19.3C25.5996 18.7 22.1996 19.8 19.8996 22.3L18.2996 24L14.7996 12.3C13.8996 8.9 15.4996 6.2 17.3996 4.8C18.4996 4 19.8996 3.4 21.4996 3.4C22.6996 3.4 23.9996 3.7 25.2996 4.6L57.1996 25.1C59.1996 26.4 60.2996 28.6 60.2996 30.9C60.3996 33.4 59.2996 35.6 57.2996 36.9Z" fill="black" />
          </svg>
        </a>
        {/* Search */}
        <div className="h-left d-none d-sm-block">
          <div className="input-group border rounded">
            <button className="btn btn-outline-secondary dropdown-toggle border-0 d-none d-sm-block" type="button" data-bs-toggle="dropdown" aria-expanded="false">Fillter</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
            <input type="text" className="form-control form-control-sm bg-transparent border-0" placeholder="Search here..." />
          </div>
        </div>
        {/* header rightbar icon */}
        <div className="h-right flex-grow-1 justify-content-end d-flex align-items-center">
          <div className="d-flex">
            <a className="nav-link text-primary" href="#" title="Settings" data-bs-toggle="modal" data-bs-target="#SettingsModal"><i className="fa fa-gear" /></a>
            <a className="nav-link text-primary" href="#" data-bs-toggle="modal" data-bs-target="#LayoutModal">
              <i className="fa fa-sliders" />
            </a>
          </div>
          <div className="dropdown notifications">
            <a className="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
              <i className="fa fa-bell" />
              <span className="pulse-ring" />
            </a>
            <div id="NotificationsDiv" className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
              <div className="card border-0 w380">
                <div className="card-header border-top p-3">
                  <h5 className="mb-0 fw-light d-flex justify-content-between">
                    <span>Notifications Center</span>
                    <span className="badge text-muted">14</span>
                  </h5>
                  <ul className="nav nav-tabs mt-3 border-bottom-0" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link fw-light ps-0 me-2 active" data-bs-toggle="tab" href="#Noti-tab-Message" role="tab">Message</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-light me-2" data-bs-toggle="tab" href="#Noti-tab-Events" role="tab">Events</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-light" data-bs-toggle="tab" href="#Noti-tab-Logs" role="tab">Logs</a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content card-body custom_scroll">
                  <div className="tab-pane fade show active" id="Noti-tab-Message" role="tabpanel">
                    <ul className="list-unstyled list mb-0">
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar1.jpg" alt />
                          <div className="flex-fill ms-3">
                            <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Chris Morise</span> <small>2MIN</small></p>
                            <span className="text-muted">changed an issue from "In Progress" to <span className="badge bg-success">Review</span></span>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded-circle no-thumbnail">RH</div>
                          <div className="flex-fill ms-3">
                            <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Hammer</span> <small>13MIN</small></p>
                            <span className="text-muted">It is a long established fact that a reader will be distracted</span>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar3.jpg" alt />
                          <div className="flex-fill ms-3">
                            <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Orlando Lentz</span> <small>1HR</small></p>
                            <span className="text-muted">There are many variations of passages</span>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar4.jpg" alt />
                          <div className="flex-fill ms-3">
                            <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Kelly</span> <small>1DAY</small></p>
                            <span className="text-muted">Contrary to popular belief <span className="badge bg-danger">Code</span></span>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar5.jpg" alt />
                          <div className="flex-fill ms-3">
                            <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Hammer</span> <small>13MIN</small></p>
                            <span className="text-muted">making it over 2000 years old</span>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar6.jpg" alt />
                          <div className="flex-fill ms-3">
                            <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Orlando Lentz</span> <small>1HR</small></p>
                            <span className="text-muted">There are many variations of passages</span>
                          </div>
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="javascript:void(0);" className="d-flex">
                          <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar7.jpg" alt />
                          <div className="flex-fill ms-3">
                            <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">savera</span> <small>1DAY</small></p>
                            <span className="text-muted">The generated Lorem Ipsum</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="Noti-tab-Events" role="tabpanel">
                    <ul className="list-unstyled list mb-0">
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded no-thumbnail"><i className="fa fa-info-circle fa-lg" /></div>
                          <div className="flex-fill ms-3">
                            <p className="mb-0 text-muted">Campaign <strong className="text-primary">Holiday Sale</strong> is nearly reach budget limit.</p>
                            <small className="text-muted">10:00 AM Today</small>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded no-thumbnail"><i className="fa fa-thumbs-up fa-lg" /></div>
                          <div className="flex-fill ms-3">
                            <p className="mb-0 text-muted">Your New Campaign <strong className="text-primary">Holiday Sale</strong> is approved.</p>
                            <small className="text-muted">11:30 AM Today</small>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded no-thumbnail"><i className="fa fa-pie-chart fa-lg" /></div>
                          <div className="flex-fill ms-3">
                            <p className="mb-0 text-muted">Website visits from Twitter is <strong className="text-danger">27% higher</strong> than last week.</p>
                            <small className="text-muted">04:00 PM Today</small>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded no-thumbnail"><i className="fa fa-warning fa-lg" /></div>
                          <div className="flex-fill ms-3">
                            <p className="mb-0 text-muted"><strong className="text-warning">Error</strong> on website analytics configurations</p>
                            <small className="text-muted">Yesterday</small>
                          </div>
                        </a>
                      </li>
                      <li className="py-2 mb-1 border-bottom">
                        <a href="javascript:void(0);" className="d-flex">
                          <div className="avatar rounded no-thumbnail"><i className="fa fa-thumbs-up fa-lg" /></div>
                          <div className="flex-fill ms-3">
                            <p className="mb-0 text-muted">Your New Campaign <strong className="text-primary">Holiday Sale</strong> is approved.</p>
                            <small className="text-muted">11:30 AM Today</small>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="Noti-tab-Logs" role="tabpanel">
                    <h4>No Logs right now!</h4>
                  </div>
                </div>
                <a className="card-footer text-center border-top-0" href="#"> View all notifications</a>
              </div>
            </div>
          </div>
          <div className="dropdown Language d-none d-sm-block">
            <a className="nav-link text-primary dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
              <i className="fa fa-language" />
            </a>
            <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0" data-bs-popper="none">
              <div className="card border-0">
                <div className="list-group list-group-custom" style={{width: 200}}>
                  <a href="#" className="list-group-item">
                    <span className="flag-icon flag-icon-gb me-2" />UK English
                  </a>
                  <a href="#" className="list-group-item">
                    <span className="flag-icon flag-icon-us me-2" />US English
                  </a>
                  <a href="#" className="list-group-item">
                    <span className="flag-icon flag-icon-de me-2" />Germany
                  </a>
                  <a href="#" className="list-group-item">
                    <span className="flag-icon flag-icon-in me-2" />Hindi
                  </a>
                  <a href="#" className="list-group-item">
                    <span className="flag-icon flag-icon-sa me-2" />Saudi Arabia
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown user-profile ms-2 ms-sm-3">
            <a className="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown">
              <img className="avatar rounded-circle img-thumbnail" src="../../../assets/images/profile_av.png" alt />
            </a>
            <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
              <div className="card border-0 w240">
                <div className="card-body border-bottom">
                  <div className="d-flex py-1">
                    <img className="avatar rounded-circle" src="../../../assets/images/profile_av.png" alt />
                    <div className="flex-fill ms-3">
                      <p className="mb-0 text-muted"><span className="fw-bold">Chris Morise</span></p>
                      <small className="text-muted">chris.fox@gamil.com</small>
                      <div>
                        <a href="#" className="card-link">Sign out</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group m-2">
                  <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-user" />Profile &amp; account</a>
                  <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-gear" />Settings</a>
                  <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-tag" />Customization</a>
                  <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-users" />Manage team</a>
                  <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-calendar" />My Events</a>
                  <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-credit-card" />My Statements</a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex ms-2 ms-sm-3">
            <a className="nav-link d-block d-xl-none menu-toggle text-primary" href="#"><i className="fa fa-bars" /></a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>

      </div>
    )
  }
}

export default Header

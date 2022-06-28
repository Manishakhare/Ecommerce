import React, { Component } from 'react'

export class Body extends Component {
  render() {
    return (
      <div>{/* main body area */}
      <div className="main px-xl-5 px-lg-4 px-md-3">


        {/* /////////////////////////////////////////////////////// */}

        <div>
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
          <div className="card-header border-0 p-3">
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
            <a href="profile.html" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-user" />Profile &amp; account</a>
            <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-gear" />Settings</a>
            <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-tag" />Customization</a>
            <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-users" />Manage team</a>
            <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-calendar" />My Events</a>
            <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-credit-card" />My Statements</a>
          </div>
        </div>
      </div>
    </div>
    <a className="nav-link ml d-block d-xl-none menu-toggle" href="#"><i className="fa fa-bars" /></a>
  </div>
 
</div>







        {/* //////////////////////////////////////////////////////////////////// */}
        {/* Body: Header */}
        <div className="body-header border-bottom d-flex py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <small className="text-muted">Welcome to Analytics Dashboard.</small>
                <h1 className="h4 mt-1">Hospital Analytics</h1>
              </div>
              <div className="col-auto">
                <a href="https://themeforest.net/user/wrraptheme" title="Download" target="_blank" className="btn btn-white border lift">Download</a>
                <button type="button" className="btn btn-dark lift">Generate Report</button>
              </div>
            </div> {/* Row end  */}
          </div>
        </div>
        {/* Body: Body */}
        <div className="body d-flex py-lg-4 py-3">
          <div className="container">
            <div className="row g-1 mb-4">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card p-3 mb-0">
                  <div className="d-flex align-items-center">
                    <div className="avatar rounded no-thumbnail bg-light"><i className="fa fa-dollar fa-lg" /></div>
                    <div className="flex-fill ms-3 text-truncate">
                      <div className="small">Revenue</div>
                      <span className="h6 mb-0">$18,925</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card p-3 mb-0">
                  <div className="d-flex align-items-center">
                    <div className="avatar rounded no-thumbnail bg-light"><i className="fa fa-credit-card fa-lg" /></div>
                    <div className="flex-fill ms-3 text-truncate">
                      <div className="small">Expense</div>
                      <span className="h6 mb-0">$11,024</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card p-3 mb-0">
                  <div className="d-flex align-items-center">
                    <div className="avatar rounded no-thumbnail bg-light"><i className="fa fa-smile-o fa-lg" /></div>
                    <div className="flex-fill ms-3 text-truncate">
                      <div className="small">Happy Clients</div>
                      <span className="h6 mb-0">8,925</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card p-3 mb-0">
                  <div className="d-flex align-items-center">
                    <div className="avatar rounded no-thumbnail bg-light"><i className="fa fa-eye fa-lg" /></div>
                    <div className="flex-fill ms-3 text-truncate">
                      <div className="small">Total Visitors</div>
                      <span className="h6 mb-0">18,925</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <span>Operation Income</span>
                    <h4>7,12,326$</h4>
                  </div>
                  <div id="apexspark1" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <span>Pharmacy Income</span>
                    <h4>25,965$</h4>
                  </div>
                  <div id="apexspark2" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <span>Hospital Expenses</span>
                    <h4>14,965$</h4>
                  </div>
                  <div id="apexspark3" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <span>Hospital Expenses</span>
                    <h4>14,965$</h4>
                  </div>
                  <div id="apexspark4" />
                </div>
              </div>
            </div> {/* .row end */}
            <div className="row g-1 mb-4 row-deck">
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0">Avg Treatment Costs</h6>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-link text-muted" type="button"><i className="fa fa-external-link" /></button>
                      <button className="btn btn-sm btn-link text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                      <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow border-0">
                        <li><a className="dropdown-item" href="#">Action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Another action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Something else here<i className="fa fa-arrow-right" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="h4 fw-bold mb-0">$105.5</div>
                    <span className="text-muted small">Avg Treatment Costs All Ages</span>
                    <div id="apex-ATCosts" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0">Hospital Survey</h6>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-link text-muted" type="button"><i className="fa fa-external-link" /></button>
                      <button className="btn btn-sm btn-link text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                      <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow border-0">
                        <li><a className="dropdown-item" href="#">Action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Another action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Something else here<i className="fa fa-arrow-right" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="apex-HospitalSurvey" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="card">
                  <div className="btn-group position-absolute top-0 end-0">
                    <a href="#" className="nav-link py-3 px-4 text-muted" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                    <ul className="dropdown-menu dropdown-menu-end border-0 shadow">
                      <li><a className="dropdown-item" href="#">Edit</a></li>
                      <li><a className="dropdown-item" href="#">Share</a></li>
                      <li><a className="dropdown-item" href="#">Delete</a></li>
                    </ul>
                  </div>                                            
                  <div className="card-body d-flex align-items-start justify-content-between flex-column">
                    <div>
                      <h6 className="mb-0">Top Rated Doctors</h6>
                      <small className="text-muted">9 Contacts</small>
                    </div>
                    <div className="pt-2">
                      <img className="avatar rounded m-1 lift" src="../../assets/images/xs/avatar1.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar rounded m-1 lift" src="../../assets/images/xs/avatar2.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar rounded m-1 lift" src="../../assets/images/xs/avatar3.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar rounded m-1 lift" src="../../assets/images/xs/avatar4.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar rounded m-1 lift" src="../../assets/images/xs/avatar5.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar rounded m-1 lift" src="../../assets/images/xs/avatar6.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar rounded m-1 lift" src="../../assets/images/xs/avatar7.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar rounded m-1 lift" src="../../assets/images/xs/avatar4.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar rounded m-1 lift" src="../../assets/images/xs/avatar5.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                    </div>
                  </div>
                  <div className="card-body d-flex align-items-start justify-content-between flex-column">
                    <div>
                      <h6 className="mb-0">Top Rated Nurse</h6>
                      <small className="text-muted">14 Contacts</small>
                    </div>
                    <div className="pt-2">
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar3.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar1.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar6.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar7.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar8.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar2.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar4.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar3.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar1.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar6.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar7.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar8.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar2.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar4.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                    </div>
                  </div>
                  <div className="card-body d-flex align-items-start justify-content-between flex-column">
                    <div>
                      <h6 className="mb-0">Contract base</h6>
                      <small className="text-muted">7 Contacts</small>
                    </div>
                    <div className="pt-2">
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar7.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar8.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar2.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar7.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar8.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar2.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                      <img className="avatar sm rounded m-1 lift" src="../../assets/images/xs/avatar4.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title="Doctors Name" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* .row end */}
            <div className="row g-1 row-deck">
              <div className="col-xl-8 col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0">Patients Status</h6>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-link text-muted" type="button"><i className="fa fa-external-link" /></button>
                      <button className="btn btn-sm btn-link text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                      <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow border-0">
                        <li><a className="dropdown-item" href="#">Action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Another action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Something else here<i className="fa fa-arrow-right" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <table id="myDataTable" className="table table-hover align-middle mb-0" style={{width: '100%'}}>
                      <thead>
                        <tr>
                          <th>Patients</th>
                          <th>Adress</th>
                          <th>Admited</th>
                          <th>Discharge</th>
                          <th>Progress</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src="../../assets/images/xs/avatar3.jpg" className="avatar sm rounded me-2" alt="profile-image" /><span>John</span></td>
                          <td>70 Bowman St. South Windsor, CT 06074</td>
                          <td>Sept 13, 2020</td>
                          <td>Sept 16, 2020</td>
                          <td>
                            <div className="progress" style={{height: 3}}>
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}> <span className="sr-only">40% Complete</span> </div>
                            </div>
                          </td>
                          <td><span className="badge bg-info">Admit</span></td>
                        </tr>
                        <tr>
                          <td><img src="../../assets/images/xs/avatar1.jpg" className="avatar sm rounded me-2" alt="profile-image" /><span>Jack Bird</span></td>
                          <td>123 6th St. Melbourne, FL 32904</td>
                          <td>Sept 13, 2020</td>
                          <td>Sept 22, 2020</td>
                          <td>
                            <div className="progress" style={{height: 3}}>
                              <div className="progress-bar bg-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}> <span className="sr-only">100% Complete</span> </div>
                            </div>
                          </td>
                          <td><span className="badge bg-success">Discharge</span></td>
                        </tr>
                        <tr>
                          <td><img src="../../assets/images/xs/avatar2.jpg" className="avatar sm rounded me-2" alt="profile-image" /><span>Jack Bird</span></td>
                          <td>4 Shirley Ave. West Chicago, IL 60185</td>
                          <td>Sept 17, 2020</td>
                          <td>Sept 16, 2020</td>
                          <td>
                            <div className="progress" style={{height: 3}}>
                              <div className="progress-bar bg-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}> <span className="sr-only">100% Complete</span> </div>
                            </div>
                          </td>
                          <td><span className="badge bg-success">Discharge</span></td>
                        </tr>
                        <tr>
                          <td><img src="../../assets/images/xs/avatar4.jpg" className="avatar sm rounded me-2" alt="profile-image" /><span>Dean Otto</span></td>
                          <td>123 6th St. Melbourne, FL 32904</td>
                          <td>Sept 13, 2020</td>
                          <td>Sept 23, 2020</td>
                          <td>
                            <div className="progress" style={{height: 3}}>
                              <div className="progress-bar bg-info" role="progressbar" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} style={{width: '15%'}}> <span className="sr-only">15% Complete</span> </div>
                            </div>
                          </td>
                          <td><span className="badge bg-info">Admit</span></td>
                        </tr>
                        <tr>
                          <td><img src="../../assets/images/xs/avatar5.jpg" className="avatar sm rounded me-2" alt="profile-image" /><span>Hughe L.</span></td>
                          <td>4 Shirley Ave. West Chicago, IL 60185</td>
                          <td>Sept 18, 2020</td>
                          <td>Sept 18, 2020</td>
                          <td>
                            <div className="progress" style={{height: 3}}>
                              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}> <span className="sr-only">85% Complete</span> </div>
                            </div>
                          </td>
                          <td><span className="badge bg-info">Admit</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0">Gender Overview</h6>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-link text-muted" type="button"><i className="fa fa-external-link" /></button>
                      <button className="btn btn-sm btn-link text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                      <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow border-0">
                        <li><a className="dropdown-item" href="#">Action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Another action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Something else here<i className="fa fa-arrow-right" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="apex-GenderOverview" />
                  </div>
                </div>
              </div>
            </div> {/* .row end */}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Body
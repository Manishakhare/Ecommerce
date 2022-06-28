import React, { Component } from 'react'

export class Main extends Component {
  render() {
    return (
      <div>{/* main body area */}
      <div className="main px-xl-5 px-lg-4 px-md-3">
        {/* Body: Header */}
        <div className="body-header border-bottom d-flex py-3">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col">
                {/* Pretitle */}
                {/* <small className="text-muted">Welcome to Analytics Dashboard.</small>
                <h1 className="h4 mt-1">Website Analytics</h1> */}
              </div>
              <div className="col-auto">
                <a href="https://themeforest.net/user/wrraptheme" title="Download" target="_blank" className="btn btn-white border lift">Download</a>
                <button type="button" className="btn btn-dark lift">Generate Report</button>
              </div>
            </div> {/* Row end  */}
          </div>
        </div>
        <div>
        <small className="text-muted">Welcome to Analytics Dashboard.</small>
                <h1 className="h4 mt-1">Website Analytics</h1>
        </div>
        {/* Body: Body */}
        <div className="body d-flex py-lg-4 py-3">
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12">
                <div className="row clearfix row-deck">
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="card mb-4 border-0 lift">
                      <div className="card-body">
               
                        <span className="text-uppercase">New Sessions</span>
                        <h4 className="mb-0 mt-2">22,500</h4>
                        <small className="text-muted">Analytics for last week</small>
                      </div>
                      <div id="apexspark1" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="card mb-4 border-0 lift">
                      <div className="card-body">
                        <span className="text-uppercase">TIME ON SITE</span>
                        <h4 className="mb-0 mt-2">1,070</h4>
                        <small className="text-muted">Analytics for last week</small>
                      </div>
                      <div id="apexspark2" />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-12 col-md-4 col-sm-12">
                    <div className="card mb-4 border-0 lift">
                      <div className="card-body">
                        <span className="text-uppercase">BOUNCE RATE</span>
                        <h4 className="mb-0 mt-2">10K</h4>
                        <small className="text-muted">Analytics for last week</small>
                      </div>
                      <div id="apexspark3" />
                    </div>
                  </div>
                </div> {/* .row end */}
                <div className="card mb-4 border-0 lift">
                  <div className="card-header py-3 d-flex flex-wrap  justify-content-between align-items-center bg-transparent border-bottom-0">
                    <div>
                      <h6 className="card-title m-0">Audience Overview</h6>
                      <small className="text-muted">Or you can <a href="#">sync data to Dashboard</a> to
                        ensure your data is always up-to-date.</small>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-link text-muted d-none d-sm-inline-block" type="button"><i className="fa fa-download" /></button>
                      <button className="btn btn-sm btn-link text-muted d-none d-sm-inline-block" type="button"><i className="fa fa-external-link" /></button>
                      <button className="btn btn-sm btn-link text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                      <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow border-0">
                        <li><a className="dropdown-item" href="#">Action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Another action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Something else here<i className="fa fa-arrow-right" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-header border">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <h6 className="mb-0 fw-bold">$3,056</h6>
                          <small className="text-muted font-11">Rate</small>
                        </div>
                        <div className="ms-lg-5 ms-md-4 ms-3">
                          <h6 className="mb-0 fw-bold">$1,998</h6>
                          <small className="text-muted font-11">Value</small>
                        </div>
                        <div className="d-none d-sm-block ms-auto">
                          <div className="btn-group" role="group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                            <label className="btn btn-outline-secondary" htmlFor="btnradio1">Week</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                            <label className="btn btn-outline-secondary" htmlFor="btnradio2">Month</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
                            <label className="btn btn-outline-secondary" htmlFor="btnradio3">Year</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="apex-AudienceOverview" />
                  </div>
                </div> {/* .card end */}
                <div className="card mb-4 border-0 lift">
                  <div className="card-header py-3 d-flex flex-wrap  justify-content-between align-items-center bg-transparent border-bottom-0">
                    <div>
                      <h6 className="card-title m-0">Social Media Traffic</h6>
                      <small className="text-muted">Or you can <a href="#">sync data to Dashboard</a> to
                        ensure your data is always up-to-date.</small>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-link text-muted d-none d-sm-inline-block" type="button"><i className="fa fa-download" /></button>
                      <button className="btn btn-sm btn-link text-muted d-none d-sm-inline-block" type="button"><i className="fa fa-external-link" /></button>
                      <button className="btn btn-sm btn-link text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                      <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow border-0">
                        <li><a className="dropdown-item" href="#">Action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Another action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Something else here<i className="fa fa-arrow-right" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="apex-SocialMediaTraffic" />
                  </div>
                </div> {/* .card end */}
                <div className="card mb-4 border-0 lift">
                  <div className="card-header py-3 d-flex flex-wrap  justify-content-between align-items-center bg-transparent border-bottom-0">
                    <div>
                      <h6 className="card-title m-0">Website Performance</h6>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-link text-muted d-none d-sm-inline-block" type="button"><i className="fa fa-download" /></button>
                      <button className="btn btn-sm btn-link text-muted d-none d-sm-inline-block" type="button"><i className="fa fa-external-link" /></button>
                      <button className="btn btn-sm btn-link text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                      <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow border-0">
                        <li><a className="dropdown-item" href="#">Action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Another action<i className="fa fa-arrow-right" /></a></li>
                        <li><a className="dropdown-item" href="#">Something else here<i className="fa fa-arrow-right" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-borderless table-hover mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Source</th>
                            <th>Visits</th>
                            <th>Avg. Time</th>
                            <th>Bounce Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td><a href="https://themeforest.net/item/lucid-angular-7-admin-template/23294743" target="_blank">https://themeforest.net/item/lucid-angular-7-admin-template/23294743</a>
                            </td>
                            <td>980</td>
                            <td>55s</td>
                            <td>5.2%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td><a href="https://themeforest.net/item/hexabit-bootstrap-4x-admin-template-ui-kit/22611789" target="_blank">https://themeforest.net/item/hexabit-bootstrap-4x-admin-template-ui-kit/22611789</a>
                            </td>
                            <td>851</td>
                            <td>16s</td>
                            <td>8.0%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td><a href="https://themeforest.net/item/lucid-hr-and-project-management-admin-template/22308861" target="_blank">https://themeforest.net/item/lucid-hr-and-project-management-admin-template/22308861</a>
                            </td>
                            <td>321</td>
                            <td>10s</td>
                            <td>5.7%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td><a href="https://themeforest.net/item/nexa-bootstrap4-material-design-premium-admin-dashboard/21122489" target="_blank">https://themeforest.net/item/nexa-bootstrap4-material-design-premium-admin-dashboard/21122489</a>
                            </td>
                            <td>205</td>
                            <td>57s</td>
                            <td>5.3%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td><a href="https://themeforest.net/user/wrraptheme/portfolio" target="_blank">https://themeforest.net/user/wrraptheme/portfolio</a>
                            </td>
                            <td>89</td>
                            <td>45s</td>
                            <td>6.1%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> {/* .card end */}
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="row row-deck">
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    <div className="card mb-4 border-0 lift">
                      <div className="card-body">
                        <span className="text-uppercase">GOAL COMPLETIONS</span>
                        <h4 className="mb-0 mt-2">$1,22,500</h4>
                        <small className="text-muted">Analytics for last week</small>
                      </div>
                      <div id="apexspark4" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    <div className="card mb-4 border-0 lift">
                      <div className="card-header py-3 bg-transparent border-0">
                        <h6 className="card-title mb-0">Active Users</h6>
                        <small className="text-muted">How do your users visited in the time.</small>
                      </div>
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="p-2 flex-fill">
                            <span className="text-muted">Daily (Avg)</span>
                            <h5>1.08K</h5>
                            <small className="text-success"><i className="fa fa-angle-up" />
                              1.03%</small>
                          </div>
                          <div className="p-2 flex-fill">
                            <span className="text-muted">Weekly</span>
                            <h5>3.20K</h5>
                            <small className="text-danger"><i className="fa fa-angle-down" />
                              1.63%</small>
                          </div>
                          <div className="p-2 flex-fill">
                            <span className="text-muted">Monthly</span>
                            <h5>8.18K</h5>
                            <small className="text-success"><i className="fa fa-angle-up" />
                              4.33%</small>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="apexcharts-line-0" id="apexspark5" />
                      </div>
                    </div> {/* .card end */}
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    <div className="card mb-4 border-0 lift">
                      <div className="card-header py-3 d-flex flex-wrap  justify-content-between align-items-center bg-transparent border-bottom-0">
                        <div>
                          <h6 className="card-title mb-0">Sessions by Device</h6>
                          <small className="text-muted">How do your users visited in the time.</small>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                          <input type="radio" className="btn-check" name="Sessionsradio" id="Sessionsradio1" defaultChecked />
                          <label className="btn btn-sm btn-outline-secondary" htmlFor="Sessionsradio1">1W</label>
                          <input type="radio" className="btn-check" name="Sessionsradio" id="Sessionsradio2" />
                          <label className="btn btn-sm btn-outline-secondary" htmlFor="Sessionsradio2">1M</label>
                          <input type="radio" className="btn-check" name="Sessionsradio" id="Sessionsradio3" />
                          <label className="btn btn-sm btn-outline-secondary" htmlFor="Sessionsradio3">1Y</label>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="d-flex text-center">
                          <div className="p-2 flex-fill">
                            <span className="text-muted">Desktop</span>
                            <h5>1.08K</h5>
                            <small className="text-success"><i className="fa fa-angle-up" />
                              1.03%</small>
                          </div>
                          <div className="p-2 flex-fill">
                            <span className="text-muted">Mobile</span>
                            <h5>3.20K</h5>
                            <small className="text-danger"><i className="fa fa-angle-down" />
                              1.63%</small>
                          </div>
                          <div className="p-2 flex-fill">
                            <span className="text-muted">Tablet</span>
                            <h5>8.18K</h5>
                            <small className="text-success"><i className="fa fa-angle-up" />
                              4.33%</small>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div id="apex-SessionsbyDevice" />
                      </div>
                    </div> {/* .card end */}
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    <div className="card mb-4 border-0 lift">
                      <div className="card-header py-3 d-flex flex-wrap  justify-content-between align-items-center bg-transparent border-bottom-0">
                        <div>
                          <h6 className="m-0">Reports overview</h6>
                        </div>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-link text-muted" type="button"><i className="fa fa-download" /></button>
                          <button className="btn btn-sm btn-link text-muted" type="button"><i className="fa fa-external-link" /></button>
                          <button className="btn btn-sm btn-link text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                          <ul className="dropdown-menu border-0 shadow dropdown-menu-end">
                            <li><a className="dropdown-item py-2 rounded" href="#">Action</a></li>
                            <li><a className="dropdown-item py-2 rounded" href="#">Another
                                action</a></li>
                            <li><a className="dropdown-item py-2 rounded" href="#">Something else
                                here</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <span className="h2 d-block mb-3">$7,431.14 USD</span>
                        {/* Progress */}
                        <div className="progress rounded-pill mb-2" style={{height: 4}}>
                          <div className="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <span>0%</span>
                          <span>100%</span>
                        </div>
                        {/* End Progress */}
                        <div className="table-responsive">
                          <table className="table table-lg table-nowrap card-table mb-0">
                            <tbody>
                              <tr>
                                <td>Gross value</td>
                                <td>$3,500.71</td>
                                <td><span className="badge bg-success">+12.1%</span></td>
                              </tr>
                              <tr>
                                <td>Net volume from sales</td>
                                <td>$2,980.45</td>
                                <td><span className="badge bg-warning">+6.9%</span></td>
                              </tr>
                              <tr>
                                <td>New volume from sales</td>
                                <td>$950.00</td>
                                <td><span className="badge bg-danger">-1.5%</span></td>
                              </tr>
                              <tr>
                                <td>Other</td>
                                <td>32</td>
                                <td><span className="badge bg-success">1.9%</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> {/* .card end */}
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    <div className="card mb-4 overflow-hidden border-0 lift">
                      <div className="card-body p-4">
                        <h6>Melbourne, FL 32904</h6>
                        <span className="text-muted">Saturday 16 January</span>
                      </div>
                      <div className="p-4 alert-danger d-flex justify-content-between align-items-center">
                        <div><span className="fs-1">43°</span></div>
                        <i className="wi wi-day-lightning fs-1" />
                      </div>
                    </div> {/* .card end */}
                  </div>
                </div> {/* .row end */}
              </div>
            </div> {/* .row end */}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Main
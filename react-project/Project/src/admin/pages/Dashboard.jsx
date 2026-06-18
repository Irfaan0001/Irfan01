import React from 'react'

function Dashboard() {
    return (
        <div>
            <div className="az-content az-content-dashboard mt-5">
                <div className="container">
                    <div className="az-content-body">
                        <div className="az-dashboard-one-title">
                            <div>
                                <h2 className="az-dashboard-title">Hi, welcome back!</h2>
                                <p className="az-dashboard-text">Your web analytics dashboard template.</p>
                            </div>
                            <div className="az-content-header-right">
                                <div className="media">
                                    <div className="media-body">
                                        <label>Start Date</label>
                                        <h6>Oct 10, 2018</h6>
                                    </div>{/* media-body */}
                                </div>{/* media */}
                                <div className="media">
                                    <div className="media-body">
                                        <label>End Date</label>
                                        <h6>Oct 23, 2018</h6>
                                    </div>{/* media-body */}
                                </div>{/* media */}
                                <div className="media">
                                    <div className="media-body">
                                        <label>Event Category</label>
                                        <h6>All Categories</h6>
                                    </div>{/* media-body */}
                                </div>{/* media */}
                                <a href className="btn btn-purple">Export</a>
                            </div>
                        </div>{/* az-dashboard-one-title */}
                        <div className="az-dashboard-nav">
                            <nav className="nav">
                                <a className="nav-link active" data-toggle="tab" href="#">Overview</a>
                                <a className="nav-link" data-toggle="tab" href="#">Audiences</a>
                                <a className="nav-link" data-toggle="tab" href="#">Demographics</a>
                                <a className="nav-link" data-toggle="tab" href="#">More</a>
                            </nav>
                            <nav className="nav">
                                <a className="nav-link" href="#"><i className="far fa-save" /> Save Report</a>
                                <a className="nav-link" href="#"><i className="far fa-file-pdf" /> Export to PDF</a>
                                <a className="nav-link" href="#"><i className="far fa-envelope" />Send to Email</a>
                                <a className="nav-link" href="#"><i className="fas fa-ellipsis-h" /></a>
                            </nav>
                        </div>
                        <div className="row row-sm mg-b-20">
                            <div className="col-lg-7 ht-lg-100p">
                                <div className="card card-dashboard-one">
                                    <div className="card-header">
                                        <div>
                                            <h6 className="card-title">Website Audience Metrics</h6>
                                            <p className="card-text">Audience to which the users belonged while on the current date range.</p>
                                        </div>
                                        <div className="btn-group">
                                            <button className="btn active">Day</button>
                                            <button className="btn">Week</button>
                                            <button className="btn">Month</button>
                                        </div>
                                    </div>{/* card-header */}
                                    <div className="card-body">
                                        <div className="card-body-top">
                                            <div>
                                                <label className="mg-b-0">Users</label>
                                                <h2>13,956</h2>
                                            </div>
                                            <div>
                                                <label className="mg-b-0">Bounce Rate</label>
                                                <h2>33.50%</h2>
                                            </div>
                                            <div>
                                                <label className="mg-b-0">Page Views</label>
                                                <h2>83,123</h2>
                                            </div>
                                            <div>
                                                <label className="mg-b-0">Sessions</label>
                                                <h2>16,869</h2>
                                            </div>
                                        </div>{/* card-body-top */}
                                        <div className="flot-chart-wrapper">
                                            <div id="flotChart" className="flot-chart" />
                                        </div>{/* flot-chart-wrapper */}
                                    </div>{/* card-body */}
                                </div>{/* card */}
                            </div>{/* col */}
                            <div className="col-lg-5 mg-t-20 mg-lg-t-0">
                                <div className="row row-sm">
                                    <div className="col-sm-6">
                                        <div className="card card-dashboard-two">
                                            <div className="card-header">
                                                <h6>33.50% <i className="icon ion-md-trending-up tx-success" /> <small>18.02%</small></h6>
                                                <p>Bounce Rate</p>
                                            </div>{/* card-header */}
                                            <div className="card-body">
                                                <div className="chart-wrapper">
                                                    <div id="flotChart1" className="flot-chart" />
                                                </div>{/* chart-wrapper */}
                                            </div>{/* card-body */}
                                        </div>{/* card */}
                                    </div>{/* col */}
                                    <div className="col-sm-6 mg-t-20 mg-sm-t-0">
                                        <div className="card card-dashboard-two">
                                            <div className="card-header">
                                                <h6>86k <i className="icon ion-md-trending-down tx-danger" /> <small>0.86%</small></h6>
                                                <p>Total Users</p>
                                            </div>{/* card-header */}
                                            <div className="card-body">
                                                <div className="chart-wrapper">
                                                    <div id="flotChart2" className="flot-chart" />
                                                </div>{/* chart-wrapper */}
                                            </div>{/* card-body */}
                                        </div>{/* card */}
                                    </div>{/* col */}
                                    <div className="col-sm-12 mg-t-20">
                                        <div className="card card-dashboard-three">
                                            <div className="card-header">
                                                <p>All Sessions</p>
                                                <h6>16,869 <small className="tx-success"><i className="icon ion-md-arrow-up" /> 2.87%</small></h6>
                                                <small>The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc.</small>
                                            </div>{/* card-header */}
                                            <div className="card-body">
                                                <div className="chart"><canvas id="chartBar5" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* row */}
                            </div>{/*col */}
                        </div>{/* row */}
                    </div>{/* row */}
                </div>
            </div>{/* az-content */}
        </div>

    )
}

export default Dashboard
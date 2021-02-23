import React from 'react'

import '../styles/components/Timeline.css'

const SIZE = "32px";
const Timeline = (props) => {
    const blue = '#0288d1';
    const red= 'red';
    const orenge = 'orange';
    return (
        <>
        <div className="card-hover-shadow card">
            <div className="card-header-tab card-header">
                <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i className="header-icon lnr-lighter icon-gradient bg-amy-crisp">   </i>Timeline Events</div>
                <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                    <div className="btn-group">
                        
                            <div className="seldiv">
                                <span>ultimos: </span>
                                    <select className="btn-shadow btn btn-focus " name="" id="selectValue" defaultValue="7" >
                                        <option value="7">7 dias</option>
                                        <option value="15">15 dias</option>
                                        <option value="30">30 dias</option>
                                        <option value="90">3 meses</option>
                                    </select>
                            </div>

                        

                    </div>
                </div>
            </div>


            <div className="scroll-area-lg">
                <div className="scrollbar-container ps">
                    <div className="p-4">
                        <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                <div id="" className="vertical-timeline-item vertical-timeline-element">
                                                    <span className="vertical-timeline-element-icon bounce-in">
                                                        <i className="badge badge-dot badge-dot-xl badge-success"></i>
                                                    </span>
                                                            <div className="vertical-timeline-element-content bounce-in">
                                                            <div className="vertical-timeline-element-content-arrow"></div>
                                                                <h4 className="timeline-title">All Hands Meeting</h4>
                                                                <p className="p-text">Lorem ipsum dolor sic amet, today at <a href="https://colorlib.com/">12:00 PM</a></p><span className="vertical-timeline-element-date">10:30 PM</span>
                                                            </div>
                                                </div>
                                                <div id="" className="vertical-timeline-item vertical-timeline-element">
                                                        <span className="vertical-timeline-element-icon bounce-in">
                                                            <i className="badge badge-dot badge-dot-xl badge-warning"></i>
                                                        </span>
                                                        <div className="vertical-timeline-element-content bounce-in">
                                                            <div className="vertical-timeline-element-content-arrow"></div>
                                                                <p className="p-text">Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                                                <p className="p-text">Yet another one, at <span className="text-success">15:00 PM</span></p>
                                                                <span className="vertical-timeline-element-date">12:25 PM</span>
                                                        </div>
                                                </div>
                                                <div id="" className="vertical-timeline-item vertical-timeline-element">
                                                    <span className="vertical-timeline-element-icon bounce-in">
                                                        <i className="badge badge-dot badge-dot-xl badge-danger"></i>
                                                    </span>
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                        <div className="vertical-timeline-element-content-arrow"></div>
                                                        <h4 className="timeline-title">Build the production release</h4>
                                                        <p className="p-text">Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>
                                                        <span className="vertical-timeline-element-date">15:00 PM</span>
                                                    </div>
                                                </div>
                                                <div id="" className="vertical-timeline-item vertical-timeline-element">
                                                    <span className="vertical-timeline-element-icon bounce-in">
                                                        <i className="badge badge-dot badge-dot-xl badge-primary">   </i>
                                                    </span>
                                                    <div className="vertical-timeline-element-content bounce-in">
                                                        <div className="vertical-timeline-element-content-arrow"></div>
                                                        <h4 className="timeline-title text-success">Something not important</h4>
                                                        <p className="p-text">Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>
                                                        <span className="vertical-timeline-element-date">15:00 PM</span>
                                                    </div>
                                                </div>
                                                <div id="" className="vertical-timeline-item vertical-timeline-element">
                                                    <span className="vertical-timeline-element-icon is-hidden">
                                                        <i className="badge badge-dot badge-dot-xl badge-success">   </i>
                                                        </span>
                                                        <div className="vertical-timeline-element-content is-hidden">
                                                            <div className="vertical-timeline-element-content-arrow"></div>
                                                            <h4 className="timeline-title">All Hands Meeting</h4>
                                                            <p className="p-text">Lorem ipsum dolor sic amet, today at <a href="https://colorlib.com/">12:00 PM</a></p>
                                                            <span className="vertical-timeline-element-date">10:30 PM</span>
                                                        </div>
                                                </div>
                                                <div id="" className="vertical-timeline-item vertical-timeline-element">
                                                        <span className="vertical-timeline-element-icon is-hidden">
                                                            <i className="badge badge-dot badge-dot-xl badge-warning">   </i>
                                                            </span>
                                                            <div className="vertical-timeline-element-content is-hidden">
                                                                <div className="vertical-timeline-element-content-arrow"></div>
                                                                <p className="p-text">Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                                                <p className="p-text">Yet another one, at <span className="text-success">15:00 PM</span></p>
                                                                <span className="vertical-timeline-element-date">12:25 PM</span>
                                                            </div>
                                                </div>
                                                <div id="" className="vertical-timeline-item vertical-timeline-element">
                                                    <span className="vertical-timeline-element-icon is-hidden">
                                                        <i className="badge badge-dot badge-dot-xl badge-danger">   </i>
                                                        </span>
                                                        <div className="vertical-timeline-element-content is-hidden">
                                                            <div className="vertical-timeline-element-content-arrow"></div>
                                                            <h4 className="timeline-title">Build the production release</h4>
                                                            <p className="p-text">Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>
                                                            <span className="vertical-timeline-element-date">15:00 PM</span>
                                                        </div>
                                                </div>
                                                <div id="" className="vertical-timeline-item vertical-timeline-element">
                                                    <span className="vertical-timeline-element-icon is-hidden">
                                                        <i className="badge badge-dot badge-dot-xl badge-primary">   </i>
                                                    </span>
                                                        <div className="vertical-timeline-element-content is-hidden">
                                                            <div className="vertical-timeline-element-content-arrow"></div>
                                                            <h4 className="timeline-title text-success">Something not important</h4>
                                                            <p className="p-text">Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>
                                                            <span className="vertical-timeline-element-date">15:00 PM</span>
                                                        </div>
                                                </div>
                                                <div id="" className="vertical-timeline-item vertical-timeline-element">
                                                    <span className="vertical-timeline-element-icon is-hidden">
                                                        <i className="badge badge-dot badge-dot-xl badge-success">   </i>
                                                    </span>
                                                    <div className="vertical-timeline-element-content is-hidden">
                                                        <div className="vertical-timeline-element-content-arrow"></div>
                                                        <h4 className="timeline-title">All Hands Meeting</h4>
                                                        <p className="p-text">Lorem ipsum dolor sic amet, today at <a href="https://colorlib.com/">12:00 PM</a></p>
                                                        <span className="vertical-timeline-element-date">10:30 PM</span>
                                                    </div>
                                                </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="d-block text-center card-footer">
                <button className="btn-shadow btn-wide btn-pill btn btn-focus">
                    <div className="badge badge-dot badge-dot-lg badge-warning badge-pulse">Badge</div>View All Messages
                </button>
            </div>


        </div>
        </>
    )
}

export default Timeline

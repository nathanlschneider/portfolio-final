import React, { Component } from 'react';
// import Codepen from 'react-codepen-embed';
import './Projects.scss';
import Btn from '../Shared/Components/Btn';

export default class Projects extends Component {
    componentDidMount() {}
    render() {
        return (
            <div id="Projects" className="projects">
                <div className="projects-content">
                    <div className="projects-title no-flow">Projects</div>
                    {/* <div className="projects-codepen-box box codepen-a">
                        <Codepen hash="PxqYYQ" user="nathanlschneider" />
                    </div>
                    <div className="projects-codepen-box box codepen-b">
                        <Codepen hash="zMpNOe" user="nathanlschneider" />
                    </div>
                    <div className="projects-codepen-box box codepen-c">
                        <Codepen hash="YJmmpr" user="nathanlschneider" />
                    </div>
                    <div className="projects-codepen-box box codepen-d">
                        <Codepen hash="YOpwed" user="nathanlschneider" />
                    </div> */}

                    <div className="projects-github-box box github-a">
                        <div className="github-box-image-a box" />
                        <Btn
                            value="View Code"
                            className="github-box-Btn github-btn-a"
                            url="https://github.com/nathanlschneider/pm2Mon"
                        />
                        <Btn value="Demo" className="github-box-Btn github-btn-b" />
                        <div className="github-box-title no-flow">pm2Mon</div>
                        <div className="github-box-sub-title">Web GUI for pm2</div>
                        <div className="github-box-text">
                            This is a simple Web GUI for the pm2 Node process monitor. It's currently using vanilla
                            HTML/CSS/JS, along with Node and Express to poll and server data. I plan on redoing this in
                            React.
                        </div>
                    </div>
                    <div className="projects-github-box box github-b">
                        <div className="github-box-image-b box" />
                        <Btn
                            value="View Code"
                            className="github-box-Btn github-btn-a"
                            url="https://github.com/nathanlschneider/react-cradlepoint_watcher"
                        />
                        <Btn value="Demo" className="github-box-Btn github-btn-b" />
                        <div className="github-box-title no-flow">Cradlepoint Watcher</div>
                        <div className="github-box-sub-title">Real-time LTE Monitor</div>
                        <div className="github-box-text">
                            This App monitors the WAN/LTE status of several hundred Cradlepoint WIFI Routers deployed at
                            Wendy's locations across the country. It uses React to display devices on LTE on a dashboard
                            in the IT Department of the Franchisee. It uses Node, Express, Web Sockets, and MongoDB on
                            the backend to poll Cradlepoint API data and to update and server the React dashboard. We've
                            been able to save thousands of dollars from monitoring the connections.
                        </div>
                    </div>
                    <div className="projects-github-box box github-c">
                        <div className="github-box-image-c box" />
                        <Btn
                            value="View Code"
                            className="github-box-Btn github-btn-a"
                            url="https://github.com/nathanlschneider/ticket_viewer"
                        />
                        <Btn value="Demo" className="github-box-Btn github-btn-b" />
                        <div className="github-box-title no-flow">Ticket Viewer</div>
                        <div className="github-box-sub-title">IvantiSM Ticket Viewer Web App</div>
                        <div className="github-box-text">
                            IvantiSM is an ITIL Service Manager application that is in use at my current employer and is
                            used mainly for the IT Help Desk ticketing system. This Web App was built so company
                            operation and management can easily find incident tickets while in the field via their
                            mobile devices. This was written in vanilla HTML/CSS/JS and has PWA functionality, and uses
                            the IvantiSM API to communicate with the system.
                        </div>
                    </div>
                    <div className="projects-github-box box github-d">
                        <div className="github-box-image-d box" />
                        <Btn
                            value="View Code"
                            className="github-box-Btn github-btn-a"
                            url="https://github.com/nathanlschneider/portfolio-final"
                        />
                        <Btn value="Demo" className="github-box-Btn github-btn-b" />
                        <div className="github-box-title no-flow">Portfolio</div>
                        <div className="github-box-sub-title">My Web Portfolio!</div>
                        <div className="github-box-text">
                            Here is the code the the site you are currently looking at. It was built using React, and
                            uses Node to server the content.
                        </div>
                    </div>
                </div>
                <svg
                    className="svg-divider-b"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <polygon fill="var(--light-blue)" points="55,0 65,100 75,0" />
                </svg>
            </div>
        );
    }
}

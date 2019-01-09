import React, { Component } from 'react';
// import Codepen from 'react-codepen-embed';
import './Projects.scss';
import Btn from '../Shared/Components/Btn/Btn';

export default class Projects extends Component {
    componentDidMount() {}
    render() {
        return (
            <div id="Projects" className="projects">
                <div className="projects-content">
                    <div className="projects-title no-flow">Projects</div>
                    <div className="projects-github-box box github-a">
                        <div className="github-box-image-a box" />
                        <Btn
                            value="View Code"
                            className="github-box-Btn github-btn-a"
                            url="https://github.com/nathanlschneider/pm2Mon"
                        />
                        <Btn value="Demo" className="github-box-Btn github-btn-b" />
                        <div className="github-box-title no-flow">pm2Mon</div>
                        <div className="github-box-sub-title">Web GUI</div>
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
                        <div className="github-box-sub-title">LTE Monitor</div>
                        <div className="github-box-text">
                            This App monitors the WAN/LTE status of several hundred Cradlepoint WIFI Routers deployed at
                            Wendy's locations across the country. It uses React on the frontend and Node, Express, Web
                            Sockets, and MongoDB on the backend.
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
                        <div className="github-box-sub-title">IvantiSM Web App</div>
                        <div className="github-box-text">
                            This is a companion app for IvantiSM to view Help Desk incident tickets on mobile devices.
                            It was written with vanilla HTML/CSS/JS. It's currently being used by a Wendy's Franchisee.
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

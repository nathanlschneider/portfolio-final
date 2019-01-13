import React, { Component } from 'react';
import './Skills.scss';

export default class Skills extends Component {
    render() {
        return (
            <div id="Skills" className="skills">
                <div className="skills-wrapper">
                    <div className="skills-content">
                        <div className="skills-title no-flow">Skills</div>
                        <div className="skills-box skills-box-a">
                            <div className="skills-box-title">Frontend</div>
                            <div>CSS/SCSS</div>
                            <div>Flexbox</div>
                            <div>Grid</div>
                            <div>HTML</div>
                            <div>Javascript</div>
                            <div>React</div>
                            <div>Responsive Design</div>
                        </div>
                        <div className="skills-box skills-box-b">
                            <div className="skills-box-title">Backend</div>
                            <div>Express</div>
                            <div>JSON</div>
                            <div>MongoDB</div>
                            <div>Node</div>
                            <div>RESTful Services</div>
                            <div>SQL/MySQL</div>
                            <div>VB.NET</div>
                        </div>
                        <div className="skills-box skills-box-c">
                            <div className="skills-box-title">Tools</div>
                            <div>Browser Dev Tools</div>
                            <div>Figma</div>
                            <div>Gimp</div>
                            <div>Git</div>
                            <div>Github</div>
                            <div>NPM</div>
                            <div>VS Code</div>
                        </div>
                        <div className="skills-box skills-box-d">
                            <div className="skills-box-title">Systems</div>
                            <div>IIS</div>
                            <div>Linux</div>
                            <div>Networking</div>
                            <div>Security</div>
                            <div>Server Admin</div>
                            <div>VM</div>
                            <div>Windows</div>
                        </div>
                    </div>
                </div>
                <svg
                    className="svg-divider-a"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <polygon fill="var(--dark)" points="55,0 65,100 75,0" />
                </svg>
            </div>
        );
    }
}

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
                            <ul>
                                <li className="skills-box-title">Frontend</li>
                                <li>HTML</li>
                                <li>CSS/SCSS</li>
                                <li>JS/ES5/ES6</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Grid</li>
                                <li>Flexbox</li>
                            </ul>
                        </div>
                        <div className="skills-box skills-box-b">
                            <ul>
                                <li className="skills-box-title">Backend</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>Websocket</li>
                                <li>REST</li>
                                <li>.NET</li>
                                <li>MongoDB</li>
                                <li>Linux</li>
                            </ul>
                        </div>
                        <div className="skills-box skills-box-c">
                            <ul>
                                <li className="skills-box-title">Tools</li>
                                <li>VS Code</li>
                                <li>NPM</li>
                                <li>Git</li>
                                <li>Gimp</li>
                                <li>Figma</li>
                                <li>Tert</li>
                                <li>Flexbox</li>
                            </ul>
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

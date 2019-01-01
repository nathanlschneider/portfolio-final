import React, { Component } from 'react';
import './Skills.scss';

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="skills-wrapper">
                    <div className="skills-content">
                        <div className="skills-title no-flow">Skills</div>
                        <div className="skills-box skills-box-a box">
                            <div className="skills-box-title">Frontend</div>
                            <ul>
                                <li>HTML</li>
                                <li>CSS/SASS/SCSS</li>
                                <li>JavaScript / ES5 / ES6</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Grid</li>
                                <li>Flexbox</li>
                            </ul>
                        </div>
                        <div className="skills-box skills-box-b box">
                            <div className="skills-box-title">Backend</div>
                            <ul>
                                <li>Node</li>
                                <li>Express</li>
                                <li>Websocket</li>
                                <li>REST</li>
                                <li>.NET</li>
                                <li>MongoDB</li>
                                <li>Linux</li>
                            </ul>
                        </div>
                        <div className="skills-box skills-box-c box">
                            <div className="skills-box-title">Tools</div>
                            <ul>
                                <li>VS Code</li>
                                <li>NPM</li>
                                <li>Git</li>
                                <li>Gimp</li>
                                <li>Figma</li>
                                <li />
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

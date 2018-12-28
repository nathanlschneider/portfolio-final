import React, { Component } from 'react';
import './Skills.scss';

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="skills-content">
                    <div className="skills-title">Skills</div>
                    <div className="skills-box box">
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
                    <div className="skills-box box">
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
                    <div className="skills-box box">
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

                <div className="skills-wall" />
            </div>
        );
    }
}

import React, { Component } from 'react';
import './NewWelcome.scss';

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome no-flow">
                <div className="welcome-content no-flow">
                    <div className="welcome-name no-flow">Nathan Schneider</div>
                    <div className="welcome-title no-flow">Full Stack Web Developer</div>
                    <div className="welcome-call-to-action" />
                </div>
                <div className="welcome-footer" />
                <svg
                    className="svg-divider-welcome"
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

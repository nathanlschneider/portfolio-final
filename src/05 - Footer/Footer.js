import React, { Component } from 'react';
import SVGComponent from '../Shared/Components/Logo/Logo';
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <SVGComponent fill="var(--medium)" width="45" height="45" />
                    <div className="footer-text">Code and Design by Nathan Schneider</div>
                    {/* <div className="footer-text">Contact me via email </div> */}
                    <div className="footer-text">
                        <strong>nlschneider@gmail.com</strong>
                    </div>
                </div>
                <svg
                    className="svg-divider-c"
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

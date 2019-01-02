import React, { Component } from 'react';
import SVGComponent from '../Shared/Components/SVG';
import './Nav.scss';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav-content">
                    <div className="nav-logo">
                        <SVGComponent className="nav-svg" height="55" width="55" />
                    </div>
                    <div className="nav-menu">
                        <div className="nav-item">About</div>
                        <div className="nav-item">Skills</div>
                        <div className="nav-item">Projects</div>
                    </div>
                </div>
            </div>
        );
    }
}

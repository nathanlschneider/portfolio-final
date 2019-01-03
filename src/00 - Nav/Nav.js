import React, { Component } from 'react';
import SVGComponent from '../Shared/Components/SVG';
import './Nav.scss';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { menuActive: false };
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick() {
        this.state.menuActive ? this.setState({ menuActive: false }) : this.setState({ menuActive: true });
    }

    componentDidMount() {}
    render() {
        return (
            <div className="nav">
                <div className="nav-content">
                    <div className="nav-content-logo" />
                    <div className="nav-content-btn" onClick={this.handleMenuClick} />
                </div>
                <div className={this.state.menuActive ? 'nav-menu show-menu' : 'nav-menu'}>
                    <SVGComponent fill="var(--light)" height="55" width="55" />

                    <div className="nav-menu-item">About</div>
                    <div className="nav-menu-item">Skills</div>
                    <div className="nav-menu-item">Projects</div>
                    <div className="nav-menu-item">Contact</div>
                </div>
            </div>
        );
    }
}

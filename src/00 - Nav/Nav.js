import React, { Component } from 'react';
import SVGComponent from '../Shared/Components/SVG';
import './Nav.scss';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { menuActive: false, displayMenuTitle: true };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.scroller = this.scroller.bind(this);
    }

    handleMenuClick() {
        this.state.menuActive ? this.setState({ menuActive: false }) : this.setState({ menuActive: true });
    }
    scroller(ID) {
        window.document.getElementById(ID).scrollIntoView({ behavior: 'smooth' });
        this.setState({ menuActive: false });
    }

    componentDidMount() {
        let menuTitle = window.document.querySelector('.nav-content-title');
        let menuBtn = window.document.querySelector('.nav-content-btn');

        menuBtn.addEventListener('mouseover', e => {
            menuTitle.style.opacity = 1;
        });

        menuBtn.addEventListener('mouseout', e => {
            menuTitle.style.opacity = 0;
        });
    }
    render() {
        return (
            <div className="nav">
                <div className="nav-content">
                    <div className="nav-content-logo" />
                    <div className="nav-content-title" style={{ opacity: 0 }}>
                        Menu
                    </div>
                    <div className="nav-content-btn" onClick={this.handleMenuClick} />
                </div>
                <div className={this.state.menuActive ? 'nav-menu show-menu' : 'nav-menu'}>
                    <SVGComponent fill="var(--light)" height="55" width="55" />
                    <div className="nav-menu-item" onClick={() => this.scroller('About')}>
                        About
                    </div>
                    <div className="nav-menu-item" onClick={() => this.scroller('Skills')}>
                        Skills
                    </div>
                    <div className="nav-menu-item" onClick={() => this.scroller('Projects')}>
                        Projects
                    </div>
                    <div className="nav-menu-item" onClick={() => window.open('mailto:nlschneider@gmail.com')}>
                        Contact
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import './About.scss';
import Btn from '../Shared/Components/Btn';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconMode: false
        };
    }

    componentDidMount() {
        window.addEventListener('resize', e => {
            window.innerWidth < 500 ? this.setState({ iconMode: true }) : this.setState({ iconMode: false });
        });
    }

    render() {
        return (
            <div id="About" className="about no-flow">
                <div className="about-wall" />
                <div className="about-content">
                    <div className="about-image box" />
                    <div className="about-text-title no-flow">About Me</div>
                    <div className="about-text no-flow">
                        {' '}
                        I'm a developer with a lifelong passion for learning, creating, technology and the arts. From
                        playing guitar and writing music to coding and building computers, my interests encompass a wide
                        range of areas. From my studies in media production, systems administration and computer
                        programming, paired with my drive to learn and create, makes me a great fit for my current
                        passion for Web Development.
                    </div>
                    <div className="about-btn-container">
                        <Btn value="Resume" iconMode={this.state.iconMode} className="" />
                        <Btn
                            value="LinkedIn"
                            iconMode={this.state.iconMode}
                            className=""
                            url="https://www.linkedin.com/in/nathan-schneider-59b6a836/"
                        />
                        <Btn
                            value="Github"
                            iconMode={this.state.iconMode}
                            className=""
                            url="https://github.com/nathanlschneider"
                        />
                        <Btn
                            value="Contact"
                            iconMode={this.state.iconMode}
                            color="medium"
                            textColor="dark"
                            className=""
                            url="mailto:nschneider@gmail.net"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

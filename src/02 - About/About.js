import React, { Component } from 'react';
import './About.scss';
import Btn from '../Shared/Components/Btn/Btn';
import Resume from '../Shared/nathan_schneider_resume.pdf';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconMode: false
        };
        this.checkWidth = this.checkWidth.bind(this);
    }

    checkWidth() {
        window.innerWidth < 500 ? this.setState({ iconMode: true }) : this.setState({ iconMode: false });
    }
    componentDidMount() {
        this.checkWidth();

        window.addEventListener('resize', e => {
            this.checkWidth();
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
                        playing the guitar and performing music, to coding, building computers or wrenching on my car,
                        my interests encompass a wide range of areas. Growing up I was the type of kid that needed to
                        take everything apart to see how it worked. As an adult, that still holds true. Getting the
                        opportunity to learn new skills and deep dive into how things work is what I love and is
                        something I enjoy in my spare time and in my career.
                    </div>
                    <div className="about-btn-container">
                        <Btn value="Resume" iconMode={this.state.iconMode} className="" url={Resume} />
                        <Btn
                            value="LinkedIn"
                            iconMode={this.state.iconMode}
                            className=""
                            url="https://www.linkedin.com/in/nathanlschneider"
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

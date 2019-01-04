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
            <div className="about no-flow">
                <div className="about-wall" />
                <div className="about-content">
                    <div className="about-image box" />
                    <div className="about-text-title no-flow">About Me</div>
                    <div className="about-text no-flow">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam dolorum repellendus
                        consectetur corrupti quasi nam! Veritatis dicta ut ratione facilis repudiandae voluptatum non
                        exercitationem, quaerat, maiores quo eligendi hic ad vero enim accusamus quod tempore molestias
                        sunt earum!
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

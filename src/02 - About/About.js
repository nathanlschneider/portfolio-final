import React, { Component } from 'react';
import './About.scss';
import Btn from '../Shared/Components/Btn';
import SVGComponent from '../Shared/Components/SVG';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="about-content">
                    <div className="about-image box">
                        <SVGComponent className="background-logo" width="250" height="250" />
                    </div>
                    <div className="about-text-container">
                        <div className="about-text-title">About Me</div>
                        <div className="about-line" />
                        <p className="about-text">
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam dolorum repellendus
                            consectetur corrupti quasi nam! Veritatis dicta ut ratione facilis repudiandae voluptatum
                            non exercitationem, quaerat, maiores quo eligendi hic ad vero enim accusamus quod tempore
                            molestias sunt earum! Blanditiis temporibus quis,
                        </p>
                    </div>
                    <div className="about-buttons">
                        <Btn value="Resume" />
                        <Btn value="LinkedIn" />
                        <Btn value="Github" />
                        <Btn value="Contact" color="medium" textColor="dark" />
                    </div>
                </div>
            </div>
        );
    }
}

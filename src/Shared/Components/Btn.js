import React, { Component } from 'react';
import './Btn.scss';
import Github from './Github.svg';
import Linkedin from './Linkedin.svg';
import Contact from './Contact.svg';
import Resume from './Resume.png';

export default class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    static defaultProps = {
        color: 'light-blue',
        iconMode: false,
        size: 'normal',
        textColor: 'light',
        value: 'Button'
    };

    imagePicker() {
        if (this.props.value === 'Github') {
            return Github;
        } else if (this.props.value === 'LinkedIn') {
            return Linkedin;
        } else if (this.props.value === 'Contact') {
            return Contact;
        } else if (this.props.value === 'Resume') {
            return Resume;
        } else {
            return this.props.value;
        }
    }
    render() {
        return (
            <button
                style={this.props.iconMode ? { width: 75 + 'px' } : { width: 200 + 'px' }}
                style={
                    this.props.size === 'medium'
                        ? { width: 150 + 'px', height: 45 + 'px', 'font-size': 18 + 'px' }
                        : null
                }
                className={`main-button bg-${this.props.color} text-${this.props.textColor} ${this.props.className}`}
            >
                {this.props.iconMode ? (
                    <img src={this.imagePicker()} height="44px" width="44px" alt={this.props.value} />
                ) : (
                    this.props.value
                )}
            </button>
        );
    }
}

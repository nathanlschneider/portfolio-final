import React, { Component } from 'react';
import './Btn.scss';
import Github from '../../Images/Github.svg';
import Linkedin from '../../Images/Linkedin.svg';
import Contact from '../../Images/Contact.svg';
import Resume from '../../Images/Resume.png';

export default class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        color: 'light-blue',
        iconMode: false,
        size: 'normal',
        textColor: 'light',
        value: 'Button',
        url: null
    };
    handleClick(event) {
        window.open(this.state.url, '_blank');
    }

    componentDidMount() {
        this.setState({ url: this.props.url });
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                style={this.props.iconMode ? { width: 75 + 'px' } : { width: 200 + 'px' }}
                className={`main-button bg-${this.props.color} text-${this.props.textColor} ${this.props.className}`}
            >
                {this.props.iconMode ? (
                    <img src={
                        this.props.value === 'Github' ? Github
                            : this.props.value === 'LinkedIn' ? Linkedin
                                : this.props.value === 'Contact' ? Contact
                                    : this.props.value === 'Resume' ? Resume
                                        : this.props.value
                    }
                        height="44px" width="44px" alt={this.props.value} />
                ) : (
                        this.props.value
                    )}
            </button>
        );
    }
}

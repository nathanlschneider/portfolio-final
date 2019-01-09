import React, { Component } from 'react';
import SVGComponent from '../Logo/Logo';
import './Loader.scss';

export default class Loader extends Component {
    componentDidMount() {
        let loadLogo = document.querySelector('.loader-content-bar');
        let loader = document.querySelector('.loader');
        loader.classList.add('fader');
        loadLogo.classList.add('progress-bar');
        setTimeout(() => {
            loader.remove();
        }, 2100);
    }
    render() {
        return (
            <div className="loader">
                <div className="loader-content">
                    <div className="loader-content-logo">Loading</div>
                    <div className="loader-content-bar" />
                </div>
            </div>
        );
    }
}

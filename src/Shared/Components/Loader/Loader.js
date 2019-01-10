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
        }, 3100);
    }
    render() {
        return (
            <div className="loader">
                <div className="loader-content">
                    <div className="loader-content-logo">
                        <SVGComponent fill="#eeeeee" width="125" height="125" />
                    </div>
                    <div className="loader-content-bar" />
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import './Welcome.scss';
import Btn from '../Shared/Components/Btn';

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <div className="welcome-content">
                    <div className="welcome-title t1">Full Stack</div>
                    <div className="welcome-title t2">Web Developer</div>
                    <div className="t3">html css react js node</div>
                    <Btn className="welcome-btn" value="Engage!" row="5" />
                </div>
                <div className="welcome-wall" />
            </div>
        );
    }
}

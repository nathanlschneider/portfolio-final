import React, { Component } from 'react';
import './Welcome.scss';
import Btn from '../Shared/Components/Btn';

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <div className="welcome-content">
                    <div className="welcome-title t1 no-flow">Full Stack</div>
                    <div className="welcome-title t2 no-flow">Web Developer</div>
                    <div className="t3 no-flow">html css react js node</div>
                    <Btn className="welcome-btn" value="Welcome!" />
                </div>
                <div className="welcome-wall" />
            </div>
        );
    }
}

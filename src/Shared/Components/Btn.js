import React, { Component } from 'react';
import './Btn.scss';

export default class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    static defaultProps = {
        value: 'Button',
        color: 'light-blue',
        textColor: 'light',
        row: 1,
        col: 1
    };

    render() {
        return (
            <button
                style={{ 'grid-row': `${this.props.row}`, 'grid-column': `${this.props.col}` }}
                className={`main-button bg-${this.props.color} text-${this.props.textColor}`}
            >
                {this.props.value}
            </button>
        );
    }
}

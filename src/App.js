import React, { Component } from 'react';
import Welcome from './01 - Welcome/Welcome';
import About from './02 - About/About';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Welcome />
                <About />
            </div>
        );
    }
}

export default App;

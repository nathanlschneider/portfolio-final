import React, { Component } from 'react';
import Nav from './00 - Nav/Nav';
import Welcome from './01 - Welcome/Welcome';
import About from './02 - About/About';
import Skills from './03 - Skills/Skills';
import Projects from './04 - Projects/Projects';
import Footer from './05 - Footer/Footer';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Welcome />
                <About />
                <Skills />
                <Projects />
                <Footer />
            </div>
        );
    }
}

export default App;

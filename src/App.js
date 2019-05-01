import React, {Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Decrypt from './components/Decrypt';
import Encrypt from './components/Encrypt';
import './App.scss';

class App extends Component {
    state = {
        activePage: "Home"
    };
    components = {
        Home,
        Encrypt,
        Decrypt
    };
    changeActivePage = (page) => {
        this.setState({activePage: page});
    };

    render() {
        let TagName = this.components[this.state.activePage || 'Home'];
        return (
            <div className="App">
                <Header changeActivePage={this.changeActivePage}/>
                <TagName changeActivePage={this.changeActivePage} />
            <footer className="app-footer bg-dark">
                <span>&copy; Abhishek shastri.</span>
            </footer>
        </div>
    );
    }
}

export default App;

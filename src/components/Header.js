import React, {Component} from 'react';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark container">
                <button className="navbar-brand" onClick={() => this.props.changeActivePage('Home')}>Encrypto</button>
                <ul className="navbar-nav row">
                    <li className="nav-item active col">
                        <button className="nav-link" onClick={() => this.props.changeActivePage('Home')}>Home <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item col">
                        <button className="nav-link" onClick={() => this.props.changeActivePage('Encrypt')}>Encrypt</button>
                    </li>
                    <li className="nav-item col">
                        <button className="nav-link"onClick={() => this.props.changeActivePage('Decrypt')} >Decrypt</button>
                    </li>
                </ul>
            </nav>
        );
    };
}

export default Header;

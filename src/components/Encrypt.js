import React, {Component} from 'react';

const Cryptr = require('cryptr');

class Encrypt extends Component {
    state = {
        secretKey: "",
        msgString: "",
        encryptedMessage: ""
    };
    handleSecretKey = (e) => {
        this.setState({secretKey: e.target.value});
    };
    handleMsgString = (e) => {
        this.setState({msgString: e.target.value});
    };
    handleCypher = (e) => {
        e.preventDefault();
        let cryptr = new Cryptr(this.state.secretKey);
        const encryptedString = cryptr.encrypt(this.state.msgString);
        this.setState({
            secretKey: "",
            msgString: "",
            encryptedMessage: encryptedString
        });
    };
    handleCopy = () => {
        var copyText = document.getElementById("secret_value");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    };

    handleClear = () => {
        this.setState({
            secretKey: "",
            hashCode: "",
            decryptedMessage: ""
        });
    };

    render() {
        return (
            <div className="encrypt container active-page">
                <form action="" onSubmit={this.handleCypher}>
                    <div className="form-group">
                        <label>Secret key</label>
                        <input type="text" className="form-control" value={this.state.secretKey}
                               onChange={this.handleSecretKey} placeholder="Enter secret key" required></input>
                        <small id="emailHelp" className="form-text text-muted">Remember secret key for future use.
                        </small>
                    </div>
                    <div className="form-group">
                        <label>Message to encrypt</label>
                        <input type="text" className="form-control" value={this.state.msgString}
                               onChange={this.handleMsgString} placeholder="Message to encrypt" required></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Generate</button>
                </form>
                {
                    this.state.encryptedMessage ?
                        <div className="form-group">
                            <label className="mt-2">Encrypted Text</label>
                            <textarea id="secret_value" value={this.state.encryptedMessage}
                                      className="form-control my-1"></textarea>
                            <button className="btn btn-primary" onClick={this.handleCopy}>copy</button>
                            <button className="btn btn-primary ml-2" onClick={this.handleClear}>Clear
                            </button>
                        </div>
                        : ""
                }
            </div>
        );
    }
}

export default Encrypt;

import React, {Component} from 'react';


class Encrypt extends Component {


    render() {
        return (
            <div className="card container active-page">
                <div className="card-body">
                    <h3 className="card-title">An Online text encryption and decryption tool.</h3>
                    <p className="card-text">This tool is used to <b>Encrypt</b> and <b>Decrypt</b> personal message
                        based on secret key.</p>
                </div>
                <div className="card-header">
                    <b>Encrypt</b>
                </div>
                <div className="card-body">
                    <h5 className="card-title">This is used to encrypt text based on personal secret key.</h5>
                    <p className="card-text">This tool is used for encrypting personal message or text.</p>
                    <div>
                        <p className="card-text">Requirements</p>
                        <ul>
                            <li>secret key (Must be remembered for decryption purpose)</li>
                            <li>Personal message or some text which has to be encrypted in order to secure from public
                                exposure.
                            </li>
                        </ul>
                    </div>
                    <button onClick={() => this.props.changeActivePage('Encrypt')} className="btn btn-primary">Encrypt
                    </button>
                </div>
                <div className="card-header">
                    <b>Decrypt</b>
                </div>
                <div className="card-body">
                    <h5 className="card-title">This is used to decrypt text based on personal secret key.</h5>
                    <p className="card-text">This tool is used for decryption of encrypted Hash Code.</p>
                    <p className="card-text">Requirements</p>
                    <ul>
                        <li>secret key (Must for decryption purpose)</li>
                        <li>Personal encrypted message or some encrypted text or Hash code which has to be decrypted
                            in order to get the actual message.
                        </li>
                    </ul>
                    <button onClick={() => this.props.changeActivePage('Decrypt')} className="btn btn-primary">Decrypt
                    </button>
                </div>

            </div>
        )
    };
};

export default Encrypt;

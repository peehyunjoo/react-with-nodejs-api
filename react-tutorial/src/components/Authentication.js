import React from 'react';
import PropTypes from 'prop-types';
var Link = require('react-router-dom').Link
class Authentication extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id : "",
            pwd: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        let id = this.state.id;
        let pwd = this.state.pwd;
        
        this.props.onLogin(id, pwd).then(
            (success) => {
                console.log('3',success);
                if(!success) {
                    this.setState({
                        pwd: ''
                    });
                }
            }
        );
    }

    handleChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    render() {
        const inputBoxes = (
            <div>
                <div className="input-field col s12 username">
                    <label>id</label>
                    <input
                    name="id"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}
                    value={this.state.id}
                    />
                </div>
                <div className="input-field col s12">
                    <label>Password</label>
                    <input
                    name="pwd"
                    type="password"
                    className="validate"
                    onChange={this.handleChange}
                    value={this.state.pwd}/>
                </div>
            </div>
        );
        const loginView = (
            <div>
                <div className="card-content">
                    <div className="row">
                        {inputBoxes}
                        <a className="waves-effect waves-light btn" onClick={this.handleLogin}>SUBMIT</a>
                    </div>
                </div>
                <div className="footer">
                <div className="card-content">
                    <div className="right" >
                    New Here? <Link to="/register">Create an account</Link>
                    </div>
                </div>
                </div>
            </div>
        );

        const registerView = (
            <div className="card-content">
                <div className="row">
                    {inputBoxes}
                    <a className="waves-effect waves-light btn">CREATE</a>
                </div>
            </div>
        );

        return (
            <div className="container auth">
                <Link className="logo" to="/">MEMOPAD</Link>
                <div className="card">
                    <div className="header blue white-text center">
                        <div className="card-content">{this.props.mode ? "LOGIN" : "REGISTER"}</div>
                    </div>
                    {this.props.mode ? loginView : registerView }
                </div>
            </div>
        );
    }
}

Authentication.propTypes = {
    mode: PropTypes.bool,
    onLogin: PropTypes.func,
    onRegister: PropTypes.func
};

Authentication.defaultProps = {
    mode : true,
    onLogin : (id, pwd) => { console.error("login function not defined"); },
    onRegister : (id, pwd) => { console.error("register function not defined"); }
};

export default Authentication;

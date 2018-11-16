
import React, { Component } from 'react';
import Authentication from '../components/Authentication';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/authentication';
import { browserHistory } from 'react-router';
class Login extends Component{

  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(id, pwd){
    return this.props.loginRequest(id, pwd).then(
      () => {      console.log('2');
        if(this.props.status === "SUCCESS"){
          let loginData = {
            isLoggedIn : true,
            id : id
          };

          document.cookie = 'key=' + btoa(JSON.stringify(loginData));
          //Materialize.toast('Welcome,'+ id , 2000);
          <div>WELCOME</div>
          //browserHistory.push('/');
          alert('등록 되었습니다.');
          window.location.href = "/";
          return true;
        }else{
          //let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
          //Materialize.toast($toastContent, 2000);
          <div>Incorrect</div>
          return false;
        }
      }
    );
  }
  render() {
    return (
        <div>
            <Authentication mode={true}
              onLogin= {this.handleLogin} />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.login.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (id, pwd) => {
      return dispatch(loginRequest(id, pwd));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

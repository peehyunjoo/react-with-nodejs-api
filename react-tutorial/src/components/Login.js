
import Header from '../components/Header';
import LoginPanel from '../components/LoginPanel';
import React, { Component } from 'react';
import cookie from 'react-cookie';
import axios from 'axios';
import Authentication from '../components/Authentication';
class Login extends Component{
/*    componentWillMount(){
		this.state = {
			userId: ''
        };
  }
  
  onLogin(adminId){
      this.setState({
        userId:adminId
      });
  }
  onLogout(){
    this.setState({
        userId:''
    });
  }
  render() {
    if(!this.state.userId){
        return <LoginPanel 
                onSuccess={this.onLogin.bind(this)} 
                />;
    }
    return (
      <div>
        <Header />
        로그인
        userId={this.state.userId}
		onLogout={this.onLogout.bind(this)}
      </div>
    )
  }
}
*/
  render() {
    return (
        <div>
            <Authentication mode={true}/>
        </div>
    );
  }
}
export default Login;

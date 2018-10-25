import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';
class List extends Component{

  handleClick(event){
    console.log('asdf');
  }
  render(){
    return(
        <li onClick={this.handleClick.bind(this)}>
          {this.props.content}
          {this.props.reg_date}
          {this.props.flag}
        </li>
    );
  }

}

export default List;

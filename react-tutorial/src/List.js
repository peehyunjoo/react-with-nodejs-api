import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';
class List extends Component{

  handleClick(event){
    event.currentTarget.style.textDecoration='line-through';
  }
  render(){
    return(
        <li>
          {this.props.name}
          {this.props.id}
        </li>
    );
  }

}

export default List;

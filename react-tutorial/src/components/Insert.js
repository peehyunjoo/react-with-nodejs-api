//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import axios from 'axios';
import React, { Component } from 'react';

/*const Insert = () => {

    return (
        <div>
        <Header/>
          insert
        </div>
    );
};*/
class Insert extends Component {
  constructor(props) {
        super(props);
        this.state = {
            type : "",
            content : "",
            flag : ""
        };
        this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
       let nextState = {};
       nextState[e.target.name] = e.target.value;
       this.setState(nextState);
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      type: this.state.type,
      content: this.state.content,
      flag: '0'
  };

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    };
     axios.post('http://localhost:3001/insert', user)
      .then(function (response) {
        alert('등록 되었습니다.');
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label>
            type : <input type="text" name="type" id="type" value={this.state.type} onChange={this.handleChange} /> &nbsp;
            content : <input type="text" name="content" id = "content" value={this.state.content} onChange={this.handleChange} />
          </label>
          <button type="submit">등록하기</button>
        </form>
      </div>
    )
  }
}
export default Insert;

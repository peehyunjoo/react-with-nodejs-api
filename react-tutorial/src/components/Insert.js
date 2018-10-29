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
            flag : "",
            value:'select'
        };
        this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
       let nextState = {};
       nextState[e.target.name] = e.target.value;
       this.setState(nextState);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
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
        window.location.href = "/";
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
        <div class="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            content : <input type="text" name="content" id = "content" value={this.state.content} onChange={this.handleChange} className="form-control"/>
          </div>
          <div className="form-group">
            <select value={this.state.value} onChange={this.onChange.bind(this)} name="type" className="form-control">
              <option value="select">Select an Option</option>
              <option value="1">준비물</option>
              <option value="2">스터디</option>
              <option value="3">회사</option>
            </select>
          </div>
          <button type="submit" class="btn btn-dark">등록하기</button>
        </form>
        </div>
      </div>
    )
  }
}
export default Insert;

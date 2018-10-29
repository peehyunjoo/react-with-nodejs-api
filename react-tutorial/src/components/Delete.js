
import Header from '../components/Header';
import axios from 'axios';
import React, { Component } from 'react';

/*const Delete = () => {
  return (
      <div>
        <Header/>
        Delete!
      </div>
  );
};*/

class Delete extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    fetch("http://localhost:3001/deleteusers")
    .then(res => res.json()) // 여기서 json 객체로 변환
      .then(
          (result) => {
              console.log(result); // 결과
              this.setState({
                  isLoaded : true,
                  items : result
              });

          },
          (error) => {
              this.setState({
                  isLoaded : true,
                  error
              });
          }

      )
    }

    handleClick(value){
      console.log(value);
      const user = {
        idx: value
      };

      axios.post('http://localhost:3001/delete', user)
        .then(function (response) { 
          window.location.href = "/";
        })
        .catch(function (error) {
          alert(error);
        });
    }
    render() {
      const { items } = this.state;
      console.log(items);

      const movieList = items.map(
          item => (
            <div className="container" key={item.idx}>
              <div className="row">
                <div className="Card col-md-6 offset-md-3 card">
                  {
                    item.flag === "1"
                     ?(<ul class="decoration"> <li> {item.content} <button onClick={this.handleClick.bind(this,item.idx)}>삭제</button> </li> <li> {item.reg_date} </li></ul>)
                     :(<ul> <li>{item.content } <button onClick={this.handleClick.bind(this,item.idx)}>삭제</button> </li> <li>{item.reg_date}</li></ul>)
                  }
                </div>
              </div>
            </div>
          )
      );
      //console.log(movieList);
      return (
          <div>
            <Header/>
            {movieList}
          </div>
      );
  }
}

export default Delete;

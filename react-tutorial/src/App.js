import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import 'bootstrap';
import axios from 'axios';
import Pagination from "react-js-pagination";
import List from './List';

class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    fetch("http://localhost:3001/users?activepage="+this.state.activePage+"&itemsCountPerPage=5")
    .then(res => res.json()) // 여기서 json 객체로 변환
      .then(
          (result) => {
              console.log("result***",result); // 결과
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

    
    handlePageChange(pageNumber){
      console.log('active page is', pageNumber);
      this.setState({activePage: pageNumber});

      fetch("http://localhost:3001/users?activepage="+pageNumber+"&itemsCountPerPage=5")
      .then(res => res.json()) // 여기서 json 객체로 변환
      .then(
          (result) => {
              console.log("result***",result); // 결과
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
        idx: value,
        flag: '1'
    };

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      };

      axios.post('http://localhost:3001/update', user)
        .then(function (response) { 
          window.location.href = "/";
        })
        .catch(function (error) {
          alert(error);
        });
    }
  render() {
      const { items } = this.state;
      const movieList = items.map(
          item => (
            <div className="container" key={item.idx}>
              <div className="row">
                <div className="Card col-md-6 offset-md-3 card">
                  {
                    item.flag === "1"
                     ?(<ul class="decoration"> <li value={item} onClick={this.handleClick.bind(this,item.idx)}> {item.content}</li> <li> {item.reg_date}</li> </ul>)
                     :(<ul> <li onClick={this.handleClick.bind(this,item.idx)}>{item.content}</li> <li>{item.reg_date}</li> </ul>)
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
            <div>
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={1}
              totalItemsCount={items.length}
              pageRangeDisplayed={3}
              onChange={this.handlePageChange}
            />
            </div>
          </div>
      );
  }
}
export default App;

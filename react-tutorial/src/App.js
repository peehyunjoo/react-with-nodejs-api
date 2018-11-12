import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import 'bootstrap';
import axios from 'axios';
import Pagination from "react-js-pagination";
import List from './List';
import moment from 'moment';
import Modal from "react-bootstrap-modal";
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
  }
    
  componentDidMount (){
    console.log("DID")
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
    handleClick(value,flag){
      console.log(value);

      if(flag == 1){
        flag = '0';
      }else{
        flag = '1';
      }
      const user = {
        idx: value,
        flag: flag
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
    componentDidUpdate(){
      console.log("update")
    }
    render() { 
      console.log('render')
      
      const { items } = this.state;
      let result ='';
      let confirm = '';
      items.map(
        modal => (
          moment(modal.end_date).format("YYYY-MM-DD") === "2018-11-03" ? confirm = '1' : result = '2'
        )  
      )   
      const movieList = items.map(
          item => (
            <div className="container" key={item.idx}>
              <div className="row">
                <div className="Card col-md-6 offset-md-3 card">
                  {
                    item.flag === "1"
                     ?(<ul class="decoration"> <li value={item} onClick={this.handleClick.bind(this,item.idx,item.flag)}> {item.content}</li> <li> {item.reg_date}</li> </ul>)
                     :(<ul> <li onClick={this.handleClick.bind(this,item.idx,item.flag)}>{item.content}</li> <li>{item.reg_date}</li> </ul>)
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
            <div class="container">
              <div class="row">
              <div class="col-md-6 offset-md-5">
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={1}
                  totalItemsCount={items.length}
                  pageRangeDisplayed={3}
                  onChange={this.handlePageChange}
                />
              </div>
              </div>
            </div>
          </div>
      );
    } 
  
}
export default App;

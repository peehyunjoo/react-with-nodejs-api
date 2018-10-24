import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import 'bootstrap';
import List from './List';
import * as $ from 'jquery';
window.jQuery = window.$ = $

class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    fetch("http://localhost:3001/users")
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
                     ?(<ul class="decoration"> <List name={item.content}/> <List id={item.reg_date}/> </ul>)
                     :(<ul> <List name={item.content}/> <List id={item.reg_date}/></ul>)
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
export default App;

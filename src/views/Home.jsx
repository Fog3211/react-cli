/*
   Home 主页
*/
import React, { Component } from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';

class Home extends Component {
   render() {
      return (
          <div id="home-container">
              <Link to={{ pathname: '/test' }} className="home-link">
                 <h1>点击测试</h1>
              </Link>

          </div>
      );
   }
}

export default Home;

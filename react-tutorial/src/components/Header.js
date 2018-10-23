import React from 'react';

const Header = () => {
  return (
    <div id="wrapper">
      <div class="overlay"></div>

      <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
        <ul class="nav sidebar-nav">
          <li class="sidebar-brand">
            <a href="#">
              일정 CHECK
            </a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Home">중요도로 보기</a>
          </li>
          <li>
            <a href="#">날짜로 보기</a>
          </li>
          <li>
            <a href="#">Box로 보기</a>
          </li>
          <li>
            <a href="/insert">등록하기</a>
          </li>
        </ul>
      </nav>

      <div id="page-content-wrapper">
        <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
          <span class="hamb-top"></span>
          <span class="hamb-middle"></span>
          <span class="hamb-bottom"></span>
        </button>
      </div>
    </div>
  );
};
export default Header;

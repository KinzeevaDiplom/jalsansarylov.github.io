import React from 'react';
import './App.css';
import MenuList from './menu/menuList';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Welcome from './mainpage/welcome';
import Todo from './todo/todo';

function App() {


  return (
    <Router>
      <div className = 'app-wrapper'>
       <MenuList />
        <div className = 'content'>
          <Route exact path = '/' component = {Welcome} />
          <Route path = '/Todo' component = {Todo}/>
        </div>
      </div>
    </Router>
  );
}

export default App;

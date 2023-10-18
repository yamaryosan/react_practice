import React, { Component } from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component {
  constructor(props){
    super(props);
    this.title = props.title;
    this.message = props.message;
  }
  
  render(){
    return <div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <p className="subtitle">draw rectangle.</p>
        <Rect x="200" y="200" width="200" height="200" color="#6ff9" radius="25"/>
        <Rect x="300" y="300" width="200" height="200" color="#f6f9" radius="75"/>
        <Rect x="400" y="400" width="200" height="200" color="#6669" radius="100"/>
      </div>
    </div>
  }
}

export default App;

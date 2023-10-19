import React, { Component } from 'react';
import './App.css';
// import Rect from './Rect';

class App extends Component {
  state = {
    list: []
  }

  doAction = (event) => {
    const x = event.pageX;
    const y = event.pageY;
    this.setState(prevState => ({
      list: [...prevState.list, { x, y }]
    }));
  }

  draw = (d) => {
    const style = {
      position: "absolute",
      left: `${d.x - 25}px`,
      top: `${d.y - 25}px`,
      width: "50px",
      height: "50px",
      backgroundColor: "#66f3",
    };
    return <div style={style}></div>;
  }

  render() {
    const area = {
      width: "500px",
      height: "500px",
      border: "1px solid blue"
    };

    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">
            Draw rectangle.
          </p>
          <div style={area} onClick={this.doAction}>
            {this.state.list.map((value, index) => this.draw(value, index))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

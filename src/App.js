import React, { Component } from 'react';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ip_number: '',
      title: "Click here"      
    }
  }

  changeTitle = () => {
    this.setState({ title: "New title" });
 };

  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <span>Your IP Address:</span>          
          <span id="IP"></span>
          <br/>
          <button onClick={this.changeTitle}>{this.state.title}</button>
        </p>
        
      </div>
    );
  }
}

export default App;

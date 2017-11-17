import React, { Component } from 'react';
import './stylesheets/App.css';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ip_number: ''
    }
  }
  
  static defaultProps = {
    center: {lat: 13.7563, lng: 100.5018},
    zoom: 13
  };

  render() {
    return (
        <div className="row">
          <div className="col-sm-4">
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
            </GoogleMapReact>
          </div>
          
          <div className="col-sm-8">
            
          </div>
          </div>
    );
  }
}

export default App;

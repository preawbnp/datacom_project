/*global google*/
import React, { Component } from 'react';
import './stylesheets/App.css';


const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  map, 
  marker
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithAMarkerWithLabel = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 13.7563, lng: 100.5018 }
  }
  >
    <MarkerWithLabel
      position={{ lat: 13.7563, lng: 100.5018 }}
      labelAnchor={new google.maps.Point(0,0)}
      labelStyle={{backgroundColor: "black", fontSize: "32px", padding: "16px", color:"white"}}
    >
      <div>Beautiful amp</div>
    </MarkerWithLabel>
  </GoogleMap>
);


class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ip_number: '',isMarkerShown: false
    }
  }
  
  static defaultProps = {
    center: {lat: 13.7563, lng: 100.5018},
    zoom: 13
  };
  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      
        <div className="row">

          <div className="col-sm-5 left-side">
            
            <MapWithAMarkerWithLabel
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `800px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                    />

          
          </div>
          
          <div className="col-sm-7 right-side">
            
            <div className="content-layout">
              <span>YOUR IP ADDRESS</span><br/>
              <span><h3>128.45.255.32</h3></span>
            </div>

            <div className="ip-layout">
              <div className="search-container">
                <div className="search-box">
                  <div className="search-icon"><i className="fa fa-search"></i></div>
                  <input className="search-input" id="search" type="text" placeholder="Search IP Address ..."/>
                </div>
              </div>
            </div>
              
            <div className="table-layout">
              <table className="table thead-default" align="center">
                <tbody>
                  <tr>
                    <td>Network</td>                      
                    <td>Unknown because it is mock up data derr.</td>
                  </tr>
                  <tr>
                    <td>DNS server</td>                      
                    <td>Unknown because it is mock up data derr.</td>
                  </tr>
                  <tr>
                    <td>Country</td>                      
                    <td>Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36</td>
                  </tr>  
                  <tr>
                    <td>Region</td>                      
                    <td>Unknown because it is mock up data derr.</td>                    
                  </tr>
                  <tr>
                    <td>City</td>                      
                    <td>Unknown because it is mock up data derr.</td>
                  </tr>
                  <tr>
                    <td>Zipcode</td>                      
                    <td>Unknown because it is mock up data derr.</td>
                  </tr>
                  <tr>
                    <td>Timezone</td>                      
                    <td>Unknown because it is mock up data derr.</td>
                  </tr>
                  <tr>
                    <td>Organization</td>                      
                    <td>Unknown because it is mock up data derr.</td>
                  </tr>
                  <tr>
                    <td>Internal IP</td>                      
                    <td>Unknown because it is mock up data derr.</td>
                  </tr>                    
                  <tr>
                    <td>TCP/IP</td>                      
                    <td>Unknown because it is mock up data derr.</td>
                  </tr>
                </tbody> 
              </table> 
            </div>

            <div className="button-layout">
              <button type="button" className="btn btn-submit">SUBMIT</button>
            </div>

          </div>
        
        </div>
    );
  }
}

export default App
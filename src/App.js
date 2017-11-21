/*global google*/
import React, { Component } from 'react';
import './stylesheets/App.css';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ip_number: '',
      isMarkerShown: false,
      data: []
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

  getInfo() {
    console.log('hello')
    axios.get('http://ip-api.com/json/' + this.state.ip_number, )
    .then((res) => {
      this.setState(res.data)
      console.log('success')
      console.log(res.data)
    })
    .catch((res) => {
      console.log('error with getting data')
    })
  }

  componentWillMount(e) {
    axios.get('http://ip-api.com/json?callback=')
    .then((res) => {
      this.setState({ip_number: res.data.query})
      this.setState(res.data)
      console.log('first success')
      console.log(res.data)
    })
    .catch((res) => {
      console.log('error with getting data')
    })
  }

  render() {
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
        defaultCenter={{ lat: this.state.lat, lng: this.state.lon }}
      >
        <MarkerWithLabel
          position={{ lat: this.state.lat, lng: this.state.lon }}
          labelAnchor={new google.maps.Point(0,0)}
          labelStyle={{backgroundColor: "tranparent", fontSize: "32px", padding: "16px", color:"white"}}
          >
          <div></div>
        </MarkerWithLabel>
      </GoogleMap>
    );
    return (
      
        <div className="row" style={{margin: '30px'}}>

          <div className="col-sm-5 left-side" >
            <MapWithAMarkerWithLabel 
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `800px` }} />}
              mapElement={<div style={{ height: `85%` }} />}
             />
          </div>
          
          <div className="col-sm-7 right-side"> 
            <div className="content-layout">
              <span>YOUR IP ADDRESS</span><br/>
              <span><h3>{this.state.ip_number}</h3></span>
            </div>

            <div className="ip-layout">
              <div className="search-container">
                <div className="search-box">
                  <div className="search-icon"><i className="fa fa-search"></i></div>
                  <input className="search-input" id="search" type="text" placeholder="Search IP Address ..." onChange={(e) => this.setState({ip_number: e.target.value})}/>
                </div>
              </div>
            </div>
              
            <div className="table-layout">
              <table className="table thead-default" align="center">
                <tbody>
                  <tr>
                    <td>Country</td>                      
                    <td>{this.state.country}</td>                    
                  </tr>
                  <tr>
                    <td>Country code</td>                      
                    <td>{this.state.countryCode}</td>
                  </tr> 
                  <tr>
                    <td>Region</td>                      
                    <td>{this.state.regionName}</td>
                  </tr>
                  <tr>
                    <td>Region code</td>                      
                    <td>{this.state.region}</td>
                  </tr>
                  <tr>
                    <td>City</td>                      
                    <td>{this.state.city}</td>
                  </tr>
                  <tr>
                    <td>Zipcode</td>                      
                    <td>{this.state.zip}</td>
                  </tr>
                  <tr>
                    <td>Timezone</td>                      
                    <td>{this.state.timezone}</td>
                  </tr>
                  <tr>
                    <td>Latitude</td>                      
                    <td>{this.state.lat}</td>
                  </tr>
                  <tr>
                    <td>Longitude</td>                      
                    <td>{this.state.lon}</td>
                  </tr>                    
                  <tr>
                    <td>Network (ISP)</td>                      
                    <td>{this.state.isp}</td>
                  </tr>
                  <tr>
                    <td>Organiaztion</td>                      
                    <td>{this.state.org}</td>
                  </tr>
                  <tr>
                    <td>AS number/name</td>                      
                    <td>{this.state.as}</td>
                  </tr>
                  {/* <tr>
                    <td>Internal IP</td>                      
                    <td>{this.state.metro_code}</td>
                  </tr>
                  <tr>
                    <td>TCP/IP fingerprint</td>                      
                    <td>{this.state.metro_code}</td>
                  </tr>
                  <tr>
                    <td>User-Agent</td>                      
                    <td>{this.state.metro_code}</td>
                  </tr>
                  <tr>
                    <td>DNS server</td>                      
                    <td>{this.state.metro_code}</td>
                  </tr> */}
                </tbody> 
              </table>

              <div className="button-layout">
                <button type="button" class="btn btn-submit" onClick={(e) => this.getInfo()}>SUBMIT</button>
              </div>
            </div>

            

          </div>
        </div>
    );
  }
}

export default App
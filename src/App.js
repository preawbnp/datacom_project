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

          <div className="col-sm-5 left-side">
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
            </GoogleMapReact>
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
              <button type="button" class="btn btn-submit">SUBMIT</button>
            </div>

          </div>
        
        </div>
    );
  }
}

export default App;

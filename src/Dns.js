/*global google*/
import React, { Component } from 'react';
import './stylesheets/App.css';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import home from './main_home.png'


class Dns extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }



  var dns = require('dns');
  
  dns.resolve4('www.google.com', function (err, addresses) {
   if (err) throw err;
  
   console.log('addresses: ' + JSON.stringify(addresses));
   this.setState({data: addresses})
  
   addresses.forEach(function (a) {
     dns.reverse(a, function (err, domains) {
       if (err) {
         console.log('reverse for ' + a + ' failed: ' +
           err.message);
       } else {
         console.log('reverse for ' + a + ': ' +
           JSON.stringify(domains));
       }
     });
   });
  });

  componentWillMount(e) {
    
  }

  render() {

    
    
    return(
      <div>
        {this.state.data}
      </div>
    )
  }
}

export default Dns
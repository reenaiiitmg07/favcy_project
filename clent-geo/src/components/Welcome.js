import React from 'react';
import {geolocated} from 'react-geolocated';
import {NavLink} from 'react-router-dom'
import ShowPost from './post/ShowPost';

class Welcome extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <div><table>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
            </tbody>
          </table>
          <br />
          <br />
          <h2>All posts</h2>
        
          <ShowPost />
          </div>
          : <div>Getting the location data&hellip;  </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Welcome);
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-map-react';

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{ lat: 40.7128, lng: -74.0060 }}
        zoom={14} 
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChamEruQAlc63y0cQh16CWXjIg-VJnfws' 
})(MapContainer);
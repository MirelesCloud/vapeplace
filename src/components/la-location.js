import React from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const LALocation = withScriptjs(withGoogleMap(() => {
  return (
      <GoogleMap
        defaultZoom={11}
        center={ { lat:  34.05471095, lng: -118.39822847 } }
      >
        <Marker position={ { lat:  34.05471095, lng: -118.39822847 } }/>
      </GoogleMap>
    );
  }
))



class LAMap extends React.Component {
  render() {
    return (
      <div className="google-map">
        <LALocation
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDhq6DDmH0nylqeC3vifVoSyWrUmRFj_7U&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `150px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

export default LAMap

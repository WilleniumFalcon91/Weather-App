import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';

export default (props) => {
    const latLon = {lat: parseFloat(props.lat), lng: parseFloat(props.lon)}
    const GoogleMapContainer = withGoogleMap (props => (
        <GoogleMap defaultZoom={9} defaultCenter={latLon}/>
    ));
    console.log(props);
    return <GoogleMapContainer 
        containerElement={ <div style={{height: '100%', }} /> } 
        mapElement={ <div style={{height: '100%', }} /> } 
        />;
}



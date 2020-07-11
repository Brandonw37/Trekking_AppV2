import React from 'react';
import GoogleMapExample from './googleMap';

export default class TrailMapContainer extends React.Component {
    render() {
        return (
            <div>
                <GoogleMapExample
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `1000px`, width: `1000px` }} />}
                    mapElement={<div style={{ height: `100%` }} />} />
            </div>
        )
    }
}
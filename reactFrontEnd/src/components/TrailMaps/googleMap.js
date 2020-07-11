import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from 'react-google-maps';

    const GoogleMapExample = withScriptjs(withGoogleMap((props) => {
/*        onPositionChanged() {
            const position = this.marker.getPosition();
            let lat = this.position.lat();
            let lng = this.position.lng();
        
            this.props.handleMarkerPositionChange(lat, lng);
          }*/

            return (
                <GoogleMap
                    defaultCenter={{ lat: 33.518589, lng: -86.810356 }}
                    defaultZoom={13}>
                {props.isMarkerShown && <Marker
                    position={{ lat: 33.518589, lng: -86.810356 }}
                    draggable
                    onPositionChanged={this.onMarkerPositionChange}
              />}
                </GoogleMap>
            );
        }));

export default GoogleMapExample;
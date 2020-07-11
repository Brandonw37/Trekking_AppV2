import React from 'react';
import {Marker} from 'react-google-maps'
import axios from 'axios';

export default class TrailMarker extends React.Component {
state={
    currentTrails: {},
    position: {
        lat: {},
        lng: {}
    }
};

componentDidMount() {
    this.getTrails();
}
    getTrails = () => {
    axios.get(
            `https://www.hikingproject.com/data/get-trails?lat=${position.lat}&lon=${position.lng}&maxDistance=20&key=${process.env.REACT_APP_TRAIL_API_KEY}`
        )
            .then(response => {this.setState ( {
                currentTrails: response.data.trails
            },
            this.renderMap(),
            console.log(currentTrails)
            )
    })
};
    render() {
        return (
            <div>
              <Marker
                position={this.props.position}
                draggable
                onPositionChanged={this.onMarkerPositionChange}
              />
            </div>
            )
    }
}
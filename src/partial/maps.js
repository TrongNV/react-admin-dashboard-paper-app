import React, { Component } from 'react';
import $ from 'jquery';

class Maps extends Component {
    componentDidMount() {
        $().ready(function() {
            window.demo.initGoogleMaps();
        });
    }

    render() {
        return (
	        <div id="map"></div>
        );
    }
}

export default Maps;

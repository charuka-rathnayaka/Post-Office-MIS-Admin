import React from "react";
import Nav from "./../../components/SidePanel/sidePanel";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
import GoogleMapLive from "./../../components/GoogleMap/googleMap";
import TopBar from "./../../components/TopBar/topBar";
import {useStyles} from "./liveDeliveryStyles";

export default function LiveDelivery(){
    const classes=useStyles();
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          <Marker
            position={{ lat: -34.397, lng: 150.644 }}
          />
        </GoogleMap>
      ));
    
    return(
        <div>
            <Nav>
                <TopBar page="Live Delivery"/>
                <div className={classes.Map}>
                    <GoogleMapLive
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC2lWdYmx2Q8xZEENBM7FYfa5XJCVSIRIg&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "85vh", width: "100%",backgroundColor:"#fcdcdc" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        liveLocations={[]}
                        newestLiveLocations={[]}
                        allLiveLocations={[]}
                        showLabels={[]}
                        defaultZoom={7.7}
                        defaultCenter={{ lat: 7.8731, lng: 80.7718 }}
                    />
                </div>
            </Nav>
        </div>
    )
}
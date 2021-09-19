import { GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import * as React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";


const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const GoogleMapLive = withScriptjs(
  withGoogleMap(
    ({
      liveLocations,
      showLabels,
      defaultZoom,
      defaultCenter,
      newestLiveLocations,
      allLiveLocations
    }) => {
      
     const locationList=[
         {
             index:1,
             lat: 6.04020749350331, 
             lng:  80.21514699867778

         },
         {
            index:1,
            lat: 6.14020749350331, 
            lng:  80.29514699867778

        },
        {
            index:1,
            lat: 6.09020749350331, 
            lng:  80.01514699867778

        },
        {
            index:1,
            lat: 6.24020749350331, 
            lng:  80.31514699867778

        }
     ]

     

      // console.log("new 5 - ",newestLiveLocations);
      // console.log("others  - ",liveLocations)
      
      return (
        <div >
          <GoogleMap options={{ fullscreenControl: false }} defaultCenter={defaultCenter} defaultZoom={defaultZoom}>
          {locationList.map((marker,index)=>{
              return(
                <Marker
                position={{ lat: marker.lat, lng:  marker.lng}}
                  
                />)
          })}
          <Marker
            position={{ lat: 6.04020749350331, lng:  80.21514699867778}}
            />
          </GoogleMap>
        </div>
      );
    }
  )
);

export default GoogleMapLive;

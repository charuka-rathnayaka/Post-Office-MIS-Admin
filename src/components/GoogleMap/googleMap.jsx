import { GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import * as React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import dateFormat from "dateformat";

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const GoogleMapLive = withScriptjs(
  withGoogleMap(
    ({
      liveLocations,
      defaultZoom,
      defaultCenter,
      postOfficeLocation
      
    }) => {
      const lengthOfLiveLocationList = liveLocations.length;
      const [isInfoWindowShowing, setInfoWindowShowing] = React.useState(
        new Array(lengthOfLiveLocationList).fill(false)
      );
      
      React.useEffect(() => {
        setInfoWindowShowing(new Array(lengthOfLiveLocationList).fill(false));
      }, []);

      const postmanIcon={
          url: `http://maps.google.com/mapfiles/ms/micons/police.png`,
          scaledSize: new window.google.maps.Size(28, 28),
          labelOrigin: new window.google.maps.Point(19, 12)
        };
      const postOfficeIcon={
          url: `http://maps.google.com/mapfiles/ms/micons/rangerstation.png`,
          scaledSize: new window.google.maps.Size(42, 42),
          labelOrigin: new window.google.maps.Point(19, 12)
      }
      
      return (
        <div >
          <GoogleMap options={{ fullscreenControl: false }} defaultCenter={defaultCenter} defaultZoom={defaultZoom}>
            <Marker
              position={{ lat: postOfficeLocation._lat, lng:  postOfficeLocation._long}}
              icon={postOfficeIcon}
            />

          {liveLocations.map((postman,index)=>{
              return(
    
                <Marker
                  key={index}
                  position={{ lat: postman.location.lat, lng:  postman.location.lng}}
                  icon={postmanIcon}
                  onClick={() => {
                    isInfoWindowShowing[index] = !isInfoWindowShowing[index];
                    setInfoWindowShowing(JSON.parse(JSON.stringify(isInfoWindowShowing)));
                  }}
                >
                  {isInfoWindowShowing[index] && (
                    <InfoWindow
                    options={{
                          backgroundColor:"red",
                          boxStyle: {
                              boxShadow: `3px 3px 10px rgba(0,0,0,0.6)`
                          },
                          
                      }}
                      onCloseClick={() => {
                        isInfoWindowShowing[index] = false;
                        setInfoWindowShowing(JSON.parse(JSON.stringify(isInfoWindowShowing)));
                      }}
                    >
                      <div >
                        <p style={{fontWeight:"bold"}}>Name: {postman.firstName+" "+postman.lastName}</p>
                        <p >Email: {postman.email}</p>
                        <p >Contact Number: {postman.contactNumber}</p>
                        <p >Last seen: {dateFormat(new Date(postman.timeStamp), "dd/mm/yyyy hh:MM TT")}</p>
                        
                      </div>
                    </InfoWindow>
                  )}
                </Marker>  
                  )
          })}
         
          </GoogleMap>
        </div>
      );
    }
  )
);

export default GoogleMapLive;

import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getLocationsRequest } from "./liveDeliveryActions";
import { CircularProgress, Grid } from "@material-ui/core";

export default function LiveDelivery(){
    const classes=useStyles();
    const liveLocations = useSelector((state) => state.LiveDeliveryReducer); 
    const postOffice = useSelector((state) => state.homeReducer.postOffice); 
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getLocationsRequest(postOffice))
    },[dispatch])
     const defaultMapOptions = {fullscreenControl: true,};

    return(
        <div>
            <Nav>
                <TopBar page="Live Delivery"/>
                {(liveLocations.locationsRetrieved)?
                <div className={classes.Map}>
                    <GoogleMapLive
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC2lWdYmx2Q8xZEENBM7FYfa5XJCVSIRIg&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "90vh", width: "100%",backgroundColor:"#fcdcdc" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                        liveLocations={liveLocations.liveLocations}
                        postmen={liveLocations.postmen}
                        postOfficeLocation={liveLocations.postOffice}
                        defaultOptions={defaultMapOptions}
                        showLabels={[]}
                        defaultZoom={14.0} 
                        defaultCenter={{lat: liveLocations.postOffice._lat, lng:liveLocations.postOffice._long}}
                        
                    />
                </div>
                :((liveLocations.isLoading)?
                (<Grid
                    container
                    alignItems="center"
                    style={{ marginTop: "25%",marginLeft:"45%" }}
                >
                    <Grid item>
                    <CircularProgress size={60} color="secondary" />
                    </Grid>
                </Grid>):(
                <p style={{color:"red",textAlign:"center",marginTop: "25%",marginLeft:"45%"}}>Error Occured: Please try again later</p>))}
            </Nav>
        </div>
    )
}
import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getPostOfficeStart} from "../RecepFunc/recepActions";
import Nav from "../../components/SidePanel/sidePanel";
import TopBar from "../../components/TopBar/topBar";
import LogiForm from "../../components/RecepForms/logiPost";
import { CircularProgress, Grid } from "@material-ui/core";




function LogiPostForm() {
        
    const postOffice = useSelector((state) => state.postOfficeReducer);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostOfficeStart());
        console.log("dcf");
    }, [dispatch])
    
    return(
        <>
            <Nav>
                <TopBar page=""/>
                {console.log(postOffice.dataRetrieved)}
                
                {(postOffice.dataRetrieved)?
                <div>
                    <LogiForm
                postOffice={postOffice.postOffice}
                />
                </div>
                
                :((postOffice.isLoading)?
                (<Grid
                    container
                    alignItems="center"
                    style={{ marginTop: "25%",marginLeft:"45%" }}
                >
                    <Grid item>
                    <CircularProgress size={60} color="secondary" />
                    </Grid>
                </Grid>):              
                (    
                <p style={{color:"red",textAlign:"center",marginTop: "25%",marginLeft:"45%"}}>Error Occured: Please try again later</p>
                ))}
                
            </Nav>
        </>
    )
                            
    
}

export default LogiPostForm;
import React,{ useEffect }  from "react";
import Nav from "../../components/SidePanel/sidePanel";
import TopBar from "../../components/TopBar/topBar";
import { useDispatch,useSelector} from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import { postmenRoutesDataRequest } from "./postmenRoutesActions";
import PostmanRoute from "../../components/PostmanRoute/postmanRoute";
export default function PostmenRoutes(){ 
    const postOffice = useSelector((state) => state.homeReducer.postOffice); 
    const dispatch = useDispatch();
    const postmenRoutesReducer=useSelector((state) => state.postmenRoutesReducer); 
    useEffect(()=>{
        dispatch(postmenRoutesDataRequest(postOffice))
    },[dispatch,postOffice,postmenRoutesReducer.dataChanged]);
    return(
        <div>
            <Nav>
                <TopBar page="Postmen Routes"/>
                <Grid container direction="column" style={{marginTop:"50px"}}>
                    {(postmenRoutesReducer.dataRetrieved==true && postmenRoutesReducer.isRequested==false)?(
                    postmenRoutesReducer.postmenRoutesData.map((postman)=>(
                        <Grid item style={{maxWidth:"1000px",marginLeft:"60px",marginBottom:"30px"}}>
                            <PostmanRoute postman={postman}></PostmanRoute>
                        </Grid>
                    ))):
                    (
                        <Grid
                            container
                            alignItems="center"
                            style={{ marginTop: "15%",marginLeft:"45%" }}
                        >
                            <Grid item>
                            <CircularProgress size={60} color="secondary" />
                            </Grid>
                        </Grid>
                    )}                
                </Grid>
            </Nav>
        </div>
    )
}
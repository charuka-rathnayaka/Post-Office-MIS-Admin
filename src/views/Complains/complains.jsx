import React,{ useEffect }  from "react";
import Nav from "../../components/SidePanel/sidePanel";
import TopBar from "../../components/TopBar/topBar";
import ComplainComponent from "../../components/Complain/complainComponent";
import { complainsDataRequest } from "./complainsActions";
import { useDispatch,useSelector} from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

export default function Complains(){ 
    const postOffice = useSelector((state) => state.homeReducer.postOffice); 
    const dispatch = useDispatch();
    const complainsReducer=useSelector((state) => state.complainsReducer); 
    useEffect(()=>{
        dispatch(complainsDataRequest(postOffice))
    },[dispatch])

    return(
        <div>
            <Nav>
                <TopBar page="Dashboard"/>
                    {(complainsReducer.isRequested===false && complainsReducer.dataRetrieved===true)?
                    (   complainsReducer.complainData.map((complain)=>
                            <div style={{marginTop:"30px"}}>
                                <ComplainComponent complain={complain} postOffice={postOffice}/>
                            </div>
                        )
                    ):
                    ((complainsReducer.isRequested===true && complainsReducer.dataRetrieved===false)?
                    (
                        <Grid
                            container
                            alignItems="center"
                            style={{ marginTop: "25%",marginLeft:"45%" }}
                        >
                            <Grid item>
                            <CircularProgress size={60} color="secondary" style={{color:"#03031c"}}/>
                            </Grid>
                        </Grid>
                    ):
                    <h3>Error Occured</h3>
                    )
                    }
            </Nav>
        </div>
    )
}
import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getMoneyOrdersStart} from "../RecepFunc/recepActions";
import Nav from "../../components/SidePanel/sidePanel";
import TopBar from "../../components/TopBar/topBar";
import MOTable from "../../components/MoneyOrderList/moneyOrders";
import { CircularProgress, Grid } from "@material-ui/core";




function MoneyOrder() {
        
    const moneyOrders = useSelector((state) => state.postOfficeReducer);
    const postOfficeID =useSelector((state)=>state.homeReducer.postOffice)
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMoneyOrdersStart(postOfficeID));
        console.log("dcf");
    }, [dispatch])
    
    return(
        <>
            <Nav>
                <TopBar page="MoneyOrders"/>
                {console.log(moneyOrders.dataRetrieved)}
                
                {(moneyOrders.dataRetrieved)?
                <div>
                    <MOTable
                moneyOrders={moneyOrders.moneyOrders}
                />
                </div>
                
                :((moneyOrders.isLoading)?
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

export default MoneyOrder;
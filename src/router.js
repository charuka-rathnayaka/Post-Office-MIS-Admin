
import React,{useContext} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Dashboard from "./views/Home/Dashboard/dashboard";
import RecepDashboard from "./views/Home/ReceptionistDashboard/dashboard";
import Login from "./views/Login/login";
import { useDispatch } from "react-redux";
import { AuthContext } from "./auth/auth.js";
import { useEffect } from "react";
import { authorizationRequest } from "./views/Home/homeActions";
import { useSelector } from 'react-redux';
import AuthError from "./views/Error/authError";
import { CircularProgress, Grid } from "@material-ui/core";
import LiveDelivery from "./views/LiveDelivery/liveDelivery";
import Registration from "./views/Registration/registration";
import Statistics from "./views/Statistics/statistics";
import Complains from "./views/Complains/complains";
import NormalForm from "./views/RecepFunc/normPform";
import RegisteredForm from "./views/RecepFunc/regPform";
import LogiForm from "./views/RecepFunc/logiPform";
import MoneyOrderForm from "./views/RecepFunc/moneyOform";
import MoneyOrder from "./views/RecepFunc/moneyO";
import MailAssignments from "./views/MailAssignments/mailAssignments";
import MailTransfers from "./views/MailTransfers/mailTransfers";


function Authorization() {
    const dispatch = useDispatch();
    const user = useContext(AuthContext);
   //console.log("token -",user.currentUser.getIdToken(true))
    useEffect(()=>{
        if (user==null){
    
        }
        else{
            // console.log("User - ",user.currentUser.uid,user.currentUser.email)
            dispatch(authorizationRequest({uID:user.currentUser.uid,email:user.currentUser.email}))
        }
      },[dispatch,user]);
      const userRole= useSelector((state)=>state.homeReducer.role);
      const isAuthorized= useSelector((state)=>state.homeReducer.isAuthorized);  
  return (
      <div className="App">
      {isAuthorized===true?
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" children={
                userRole? 
                (userRole==="postmaster"?(<Dashboard />):
                (userRole==="supervisor"?(<Dashboard />):
                (userRole==="receptionist"?(<RecepDashboard/>):<AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>)))
                :<AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>
            } />
            <Route exact path="/live-delivery" children={
                userRole? 
                (userRole==="postmaster"?(<LiveDelivery />):
                <AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>)
                :<AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>
            }/>
            <Route exact path="/registration" children={
                userRole? 
                (userRole==="postmaster"?(<Registration />):
                (userRole==="supervisor"?(<Registration />):
                <AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>))
                :<AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>
            } />
            <Route exact path="/statistics" children={
                userRole? 
                (userRole==="postmaster"?(<Statistics />):
                <AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>)
                :<AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>
            } />
            <Route exact path="/complains" children={
                userRole? 
                (userRole==="postmaster"?(<Complains />):
                <AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>)
                :<AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>
            } />
            <Route exact path="/normPForm" component={
                userRole? 
                (userRole==="receptionist"?(NormalForm):
                AuthError)
                :AuthError
            } />
            <Route exact path="/regPForm" component={
                userRole? 
                (userRole==="receptionist"?(RegisteredForm):
                AuthError)
                :AuthError
            } />
            <Route exact path="/logiPForm" component={
                userRole? 
                (userRole==="receptionist"?(LogiForm):
                AuthError)
                :AuthError
            } />
            <Route exact path="/moneyOForm" component={
                userRole? 
                (userRole==="receptionist"?(MoneyOrderForm):
                AuthError)
                :AuthError
            } />
            <Route exact path="/moneyO" component={
                userRole? 
                (userRole==="receptionist"?(MoneyOrder):
                AuthError)
                :AuthError
            } />

            <Route exact path="/mail-assignments" children={
                userRole? 
                (userRole==="supervisor"?(<MailAssignments />):
                <AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>)
                :<AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>
            } />

            <Route exact path="/mail-transfer" children={
                userRole? 
                (userRole==="supervisor"?(<MailTransfers/>):
                <AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>)
                :<AuthError errorCode={"403"} errorMessage={"Access Denied. Authorization Error Occured"}/>
            } />

           

            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>

            <Route children={<AuthError errorCode={"404"} errorMessage={"Page Not Found"}/>} />
          </Switch>
        </Router>
        :
        <div style={{backgroundColor:"#d4d4d4",
        minHeight:"100vh"}}>
        <Grid
        container
        direction="column"
        justify="flex-end"
        alignItems="center"
        spacing={3}
        style={{ position: "absolute", top: "35%" }}
      >
        <Grid>
          <img
            src="/App_Icon.png"
            style={{ width: 200 * 1.5, height: 80 * 1.5,  }}
            alt="Logo"
          />
        </Grid>
        <Grid item>
          <CircularProgress size={80} color="secondary" style={{color:"#03031c"}}/>
        </Grid>
      </Grid>
      </div>}  
      </div>
  );
}

export default Authorization;
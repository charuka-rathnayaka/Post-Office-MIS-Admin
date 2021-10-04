
import React,{useContext} from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from "./views/Home/Dashboard/dashboard";
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
import MailAssignments from "./views/MailAssignments/mailAssignments";
import MailTransfers from "./views/MailTransfers/mailTransfers";


function Authorization() {
    const dispatch = useDispatch();
    const user = useContext(AuthContext);
   // console.log("token -",user.currentUser.getIdToken(true))
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
      {isAuthorized==true?
        <Router>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={
                userRole? 
                (userRole=="postmaster"?(Dashboard):
                (userRole=="supervisor"?(Dashboard):
                (userRole=="receptionist"?AuthError:AuthError)))
                :AuthError
            } />
            <Route exact path="/live-delivery" component={
                userRole? 
                (userRole=="postmaster"?(LiveDelivery):
                AuthError)
                :AuthError
            } />
            <Route exact path="/registration" component={
                userRole? 
                (userRole=="postmaster"?(Registration):
                (userRole=="supervisor"?(Registration):
                AuthError))
                :AuthError
            } />
            <Route exact path="/statistics" component={
                userRole? 
                (userRole=="postmaster"?(Statistics):
                AuthError)
                :AuthError
            } />
            <Route exact path="/complains" component={
                userRole? 
                (userRole=="postmaster"?(Complains):
                AuthError)
                :AuthError
            } />

            <Route exact path="/mail-assignments" component={
                userRole? 
                (userRole=="supervisor"?(MailAssignments):
                AuthError)
                :AuthError
            } />

            <Route exact path="/mail-transfer" component={
                userRole? 
                (userRole=="supervisor"?(MailTransfers):
                AuthError)
                :AuthError
            } />

            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>

      
        </Router>
        :
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
          <CircularProgress size={80} color="secondary" />
        </Grid>
      </Grid>}  
      </div>
  );
}

export default Authorization;
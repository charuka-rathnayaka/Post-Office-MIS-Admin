
import React,{useContext} from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PostmasterDashboard from "./views/Home/PostmasterDashboard/dashboard";
import Login from "./views/Login/login";
import { useDispatch } from "react-redux";
import { AuthContext } from "./auth/auth.js";
import { useEffect } from "react";
import { authorizationRequest } from "./views/Home/homeActions";
import { useSelector } from 'react-redux';
import AuthError from "./views/Error/authError";
import { CircularProgress, Grid } from "@material-ui/core";
import SupervisorDashboard from "./views/Home/SupervisorDashboard/dashboard";


function Authorization() {
    const dispatch = useDispatch();
    const user = useContext(AuthContext);
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
                (userRole=="postmaster"?(PostmasterDashboard):
                (userRole=="supervisor"?(SupervisorDashboard):
                (userRole=="receptionist"?null:null)))
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
            src={""}
            style={{ width: 200 * 1.5, height: 80 * 1.5, opacity: 0.1 }}
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
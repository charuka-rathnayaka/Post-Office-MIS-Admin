import React, { useEffect, useState } from "react";
import {app} from "./base.js";
import { CircularProgress, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { saveIdToken } from "../views/Login/loginActions.js";
export const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
      /*console.log("User ",user.getIdTokenResult().claims);
      user.getIdTokenResult()
      .then((idTokenResult) => {
        console.log("User ",idTokenResult.claims);
      })*/
      if (user) {
          user.getIdToken(true).then((idToken) => {
            dispatch(saveIdToken(idToken));
          });
          localStorage.setItem("refreshToken", user.refreshToken);
      }
    });
  }, []);

  if (pending) {
    return (
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
            alt="APP Logo"
          />
        </Grid>
        <Grid item>
          <CircularProgress size={80} color="secondary" />
        </Grid>
      </Grid>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

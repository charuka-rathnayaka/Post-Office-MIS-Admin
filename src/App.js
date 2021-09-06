// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from "./views/Home/dashboard";
import Login from "./views/Login/login";
import { AuthProvider } from "./auth/auth";
import PrivateRoute from "./auth/privateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from "./views/Home/PostmasterDashboard/dashboard";
import Login from "./views/Login/login";
import { AuthProvider } from "./auth/auth";
import Authorization from './router';
import PrivateRoute from './auth/privateRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
            <Route exact path="/login" component={Login} />
            <PrivateRoute path ="/" component={Authorization}></PrivateRoute>
            
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Explore from "./Components/Explore/Explore";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Register from "./Components/Login/Register/Register";
import Orders from "./Components/Orders/Orders";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/details/:id">
            <Orders></Orders>
          </PrivateRoute>
          <Route exact path="/explore">
              <Explore></Explore>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="/register">
              <Register></Register>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

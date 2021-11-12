import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Footer from "./Pages/Shared/Footer/Footer";
import AddCameras from "./Admin/AddCameras/AddCameras";
import Explore from "./Pages/Explore/Explore/Explore";
import Order from "./Pages/Order/Order/Order";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ManageCamerasUpdate from "./Admin/ManageCamerasUpdate/ManageCamerasUpdate";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <PrivateRoute path="/dash-board">
              <Dashboard />
            </PrivateRoute>
            <Route path="/manage-cameras-update/:updateId">
              <ManageCamerasUpdate />
            </Route>
            <Route path="/add-cameras">
              <AddCameras />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/order/:orderId">
              <Order />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

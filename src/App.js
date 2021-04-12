import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import { useState } from 'react';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllPatients from './Components/AllPatients/AllPatients';
import AddDoctor from './Components/AddDoctor/AddDoctor';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    image: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/appointment'>
          <Appointment></Appointment>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/dashboard/appointment'>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path='/doctor/patients'>
          <AllPatients></AllPatients>
        </Route>
        <Route path='/doctor/addDoctor'>
          <AddDoctor></AddDoctor>
        </Route>
      </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;

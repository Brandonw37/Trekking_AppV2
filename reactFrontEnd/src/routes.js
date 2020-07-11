import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

// components
import Main from './components/Main';
import Contact from './components/Contact';
import TrailMapContainer from "./components/TrailMaps/googleaMapsContainer";
import Thanks from './components/Thanks';
import Packer from './components/packing';
import { Login } from './components/Login';
import Register from './components/Register';


const PrivateRoute = ({ component: Component, ...rest }) => {
   const data = useSelector(state => state.loginResults.loginResults) 
   console.log(data)
   return (
  <Route {...rest} render={(props) => (
    data === true
      ? <Component {...props} />
      : <Redirect to='Login' />
  )}
  />
)}

export const Routes =() => {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <PrivateRoute exact path="/map" component={TrailMapContainer} />
        <Route exact path="/thanks/:name" component={Thanks} />
        <PrivateRoute exact path="/packing" component={Packer} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    )
  }
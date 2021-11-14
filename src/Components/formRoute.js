import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup';
import Login from './Login';
import Addexercise from './Addexercise';

function formRoute() {
    return (
        <div>
         <Switch>
        
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/addexercise' component={Addexercise} />
      </Switch>
        </div>
    )
}

export default formRoute

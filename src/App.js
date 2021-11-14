import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import FormRoute from './Components/formRoute';




function App() {
  return (
    <div>

      <Switch>
        <Route exact path='/' component={Dashboard} />
        <FormRoute/>
      </Switch>

      
    </div>
  )
}

export default App

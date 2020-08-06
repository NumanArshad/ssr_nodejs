import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
const Root = () => (

    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        {/* <Route exact path='/Register' component={RegisterView} />
        <Route exact path='/todoView/:userId' component={todoView} /> */}
      </Switch>
    </BrowserRouter >
  );
  export default Root;
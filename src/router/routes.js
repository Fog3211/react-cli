/*
   Root, Router 配置
*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';

import Test from '../views/Test.jsx';
import Home from '../views/Home.jsx';

const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/home" component={Home} />
                     <Route path="/test" component={Test} />
                     <Route render={() => <Redirect to="/" />} />
                  </Switch>
               </App>
            )}
         />
      </Switch>
   </div>
);

export default Root;

import React from 'react';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import page404 from '../components/Pageerror';
import Dashboard from '../components/Dashboard';

import Categoryroutes from '../components/category/Categoryroutes';
import Addcategory from '../components/category/Addcategory';
import Signup from '../components/Website/Signup';
import Signin from '../components/Website/Signin';


const Routes = () => {
 
  return (
    

    <Router>
   
         <Switch>    
    
      
         <Route path="/" component={ Dashboard}  exact />  
         <Route path="/Category" component={Categoryroutes }  exact />  
         <Route path="/Signup" component={Signup }  exact /> 
         <Route path="/Signin" component={Signin }  exact /> 
         {/* <Route path="/Category" component={Addcategory }  exact />  */}
         <Route path="/*" component={ page404} exact />    
       </Switch>
  

      
   
   
  </Router>
  );
};

export default Routes;
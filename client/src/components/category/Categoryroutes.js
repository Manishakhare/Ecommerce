import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Addcategory from './Addcategory';



export class Categoryroutes extends Component {
  render() {
    return (
      <div>
                 
                  <Route path={`${this.props.match.path}/Addcategory`} component={Addcategory} />
                  {/* <Route path={`${this.props.match.path}/Viewuserlist`} component={Viewuserlist} /> */}
                 
      </div>
    )
  }
}

export default Categoryroutes
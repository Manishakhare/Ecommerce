import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Sidebarmenu from './Sidebarmenu'

export class Dashboard extends Component {
  render() {
    return (
      <div id="layout-a" class="theme-cyan" >
          
         <Header/>
    
       <Sidebarmenu/>
        {/* <Main/> */}
        {/* <CategoryInsert/> */}
        <Footer/>
      </div>
    )
  }
}

export default Dashboard

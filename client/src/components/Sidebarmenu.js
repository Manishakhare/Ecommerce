import React, { Component } from 'react'

export class Sidebarmenu extends Component {
  render() {
    return (
      <div>
      <div className="sidebar px-3 py-2 py-md-3">
        <div className="d-flex flex-column h-100">
          <div className="d-flex align-items-center mb-4 mt-2">
            <h4 className="sidebar-title mb-0 flex-grow-1"><span> Ecommarce </span></h4>
            <div className="dropdown Language">
              <a className="nav-link text-light dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown">
                <i className="fa fa-language" />
              </a>
              <div className="dropdown-menu rounded-lg shadow border-0 p-0 mt-2" data-bs-popper="none">
                <div className="card border-0">
                  <div className="list-group list-group-custom" style={{width: 200}}>
                    <a href="#" className="list-group-item">
                      <span className="flag-icon flag-icon-gb me-2" />UK English
                    </a>
                    <a href="#" className="list-group-item">
                      <span className="flag-icon flag-icon-us me-2" />US English
                    </a>
                    <a href="#" className="list-group-item">
                      <span className="flag-icon flag-icon-de me-2" />Germany
                    </a>
                    <a href="#" className="list-group-item">
                      <span className="flag-icon flag-icon-in me-2" />Hindi
                    </a>
                    <a href="#" className="list-group-item">
                      <span className="flag-icon flag-icon-sa me-2" />Saudi Arabia
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="mb-2 mt-1">
            <div className="input-group">
              <input type="text" className="form-control border-0" placeholder="Search..." />
            </div>
          </form>
          {/* Menu: main ul */}
          <ul className="menu-list flex-grow-1">
            <li><a className="m-link active" href="index.html"><i className="fa fa-dashboard" /><span>Dashboard</span></a></li>

            <li><a className="m-link" href="/Category/Addcategory"><i className="fa fa-book" /> <span> Category</span></a></li>
            <li><a className="m-link" href="chat.html"><i className="fa fa-product-hunt" /> <span>  Subcategory</span></a></li>
            <li><a className="m-link" href="chat.html"><i className="fa fa-product-hunt" /> <span>   Product</span></a></li>
           
            <li><a className="m-link" href="index.html"><i className="fa  fa-user" /><span>   Order</span></a></li>
            <li><a className="m-link" href="index.html"><i className="fa fa-credit-card" /><span>   Curt to payment</span></a></li>
            

    
            
           
            
          
          </ul>
        
        </div>
        </div>
        </div>
    )
  }
}

export default Sidebarmenu
import React from 'react'

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="https://www.vapeplacecbd.com">vape<span style={{color:"rgba(144,144,144,1)"}}>place</span> <span style={{color:"rgba(034,139,34,1)", fontWeight:600}}>CBD</span></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://www.vapeplacecbd.com">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.vapeplacecbd.com">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.vapeplacecbd.com">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar

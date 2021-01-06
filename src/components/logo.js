import React from "react"
import logo from "../../static/assets/rmlogo.png"
import { Link } from "gatsby"

const Logo = props => (
  <div className="site-logo">
    <Link to="/">
      <img className="site-logo-image" src={logo} />
      <div className="logo-text">
        <span>{props.title}</span>
        <span className="light">Robin Mustonen</span>
      </div>
    </Link>
  </div>
)

export default Logo

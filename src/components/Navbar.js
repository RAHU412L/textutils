import React from 'react';
 import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// proptypes is used to define the types of props that a component expects to receive. It helps in catching bugs by ensuring that the correct data types are passed to components.
export default function Navbar(props) {
  // We define defaults here. If props.title is undefined, it uses the string.
  const title = props.title || "Set title here";
  const aboutText = props.aboutText || "About text here";
  const mode=props.mode;
  const text=mode==='light'?'enable dark mode':'enable light mode';
  
  return (
       <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>

  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{aboutText}</Link>
        </li>
        
        
      </ul>
      <form className="d-flex mx-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
       </form>
                
                <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" onChange={props.toggleMode} id="switchCheckChecked" />
          <label className="form-check-label" htmlFor="switchCheckChecked" onChange={props.toggleMode}>{text}</label>
        </div>
    </div>
  </div>
</nav>
  )
}
// it tells that the Navbar component expects to receive two props: title and aboutText, both of which should be strings.
// if any other type is passed, a warning will be shown in the console during development.
// This is useful for catching bugs and ensuring that components are used correctly.
Navbar.propTypes={title:PropTypes.string,
  // tile:propTypes.string.isRequired  --> this will make the title prop required
  //if not passed then it will give warning in console
  //if define default props then no warning will be shown
aboutText:PropTypes.string}


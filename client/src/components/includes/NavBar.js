import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <a className="navbar-brand" href="!#">Generator</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="!#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://github.com/nosisky/number-generator">Github</a>
        </li>
      </ul>
    </div>
  </nav>
);
};

export default NavBar;

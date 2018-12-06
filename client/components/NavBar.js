import React from 'react';

const NavBar = () => {
  return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                  <a href="#" className="navbar-brand">Meaning Cloud</a>
              </div>

              <div className="navbar-header navbar-right">
                  <a href="/summarizer" className="navbar-brand">Summarizer</a>
              </div>

              <div className="navbar-header navbar-right">
                  <a href="/" className="navbar-brand">Summaries</a>
              </div>
          </div>
      </nav>
  )
};

export default NavBar;
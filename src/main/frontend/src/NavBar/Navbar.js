import React from 'react';
import companyLogo from '../images/image1.JPG';

function Navbar() {
    return (
        <nav>
          <div className="nav">
              <div>
                  <img src={companyLogo} alt="company-logo"/>
              </div>
              <ul>
                  <li>Home</li>
                  <li>Find a Locker</li>
                  <li>Size Guide</li>
                  <li>Locations</li>
                  <li>Help Center</li>
              </ul>

              <ul className="margin-class">
                  <li>My Account</li>
                  <li>080-188-0872</li>
                  <li className="nav-btn">PAY YOUR BILLS</li>
              </ul>
          </div>
        </nav>
    )
}

export default Navbar;

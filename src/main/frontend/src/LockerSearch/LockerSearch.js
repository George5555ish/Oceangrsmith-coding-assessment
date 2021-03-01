import React from 'react';
import image2 from '../images/image2.JPG';
import './LockerSearch.css';

function LockerSearch() {
    return (

        <div className="img-background">
            <div className="img-bg-child">
                <h1>Find a Locker</h1>
                <div className="input-div">
              <div>
                  <input />
              </div>
                    <img src={image2}/>
                </div>
            </div>
        </div>
    )
}

export default LockerSearch;

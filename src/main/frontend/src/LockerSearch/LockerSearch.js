import React from 'react';
import TextField from '@material-ui/core/TextField';
import image2 from '../images/image2.JPG';
import './LockerSearch.css';

function LockerSearch() {
    return (

        <div className="img-background">
            <div className="img-bg-child">
                <h1>Find a Locker</h1>
                <div className="input-div">
              <div className="input">
                  <TextField id="standard-basic" label="City Or State" fullWidth/>
              </div>
                    <img src={image2} alt="test"/>
                </div>
            </div>
        </div>
    )
}

export default LockerSearch;

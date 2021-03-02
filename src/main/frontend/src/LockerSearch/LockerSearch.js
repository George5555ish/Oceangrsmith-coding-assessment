import React from 'react';
import TextField from '@material-ui/core/TextField';
import image2 from '../images/image2.JPG';
import './LockerSearch.css';

function LockerSearch() {
    return (

        <div className="img-background ">
            <div className="img-bg-child ">
                <h1>Find a Locker</h1>
                <div className="input-div dropdown"> //Add active class to this

              <div className="input ">
                  <TextField id="standard-basic" label="City Or State" fullWidth/>
              </div>
                    <img src={image2} alt="test"/>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default LockerSearch;

import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import image2 from '../images/image2.JPG';
import './LockerSearch.css';

function LockerSearch({locations}) {



    const [typedLocation, setTypedLocation] = useState('');
    const [availableLocations, setAvailableLocations] = useState([])

    const handleTypedLocation = (e) => {
        const locationString = e.target.value;
        const allLocations = locations.map(
            (location) => {
                return location.location;
            }
        );

        const filteredArray = allLocations.filter(
            location => location.toLowerCase().includes(locationString.toLowerCase())
        );



        /*if (l)*/


        setTypedLocation(locationString);
        setAvailableLocations(filteredArray);

        console.log(availableLocations);
        console.log(availableLocations.length);
    }
    return (

        <div className="img-background ">
            <div className="img-bg-child ">
                <h1>Find a Locker</h1>
                <div className="input-div dropdown active">

              <div className="input ">
                  <TextField id="standard-basic"
                             label="City Or State"
                             fullWidth
                             value={typedLocation}
                             onChange={handleTypedLocation}
                  />
              </div>
                    <img src={image2} alt="test"/>
                    {
                        availableLocations.length !== 0 && availableLocations.length !== 7 ?  <div className="dropdown-content">

                            {
                               availableLocations.map(
                                   (location, key) => <a key={key} href="#">
                                       {location}
                                </a>
                               )
                            }

                        </div> : null
                    }




                </div>


            </div>


        </div>
    )
}

export default LockerSearch;

import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import image2 from '../images/image2.JPG';
import './LockerSearch.css';

function LockerSearch({locations, handleExternalFilter}) {



    const [typedLocation, setTypedLocation] = useState('');
    const [availableLocations, setAvailableLocations] = useState([])
    const [finalLockers, setFinalLockers] = useState([]);

    const handleTypedLocation = (e) => {
        const locationString = e.target.value;

        const allLocations = locations?.map(
            (locationItem) => {
                const { location} = locationItem;

                return location;
            }
        );
        const filteredArray = allLocations?.filter(
            location => location?.toLowerCase().includes(locationString.toLowerCase())
        );


        const allLockers = locations?.map(
            (location) => {

                const {availableLockers} = location;
                return availableLockers;
            }
        );

        const filteredLockers = allLockers?.filter(
            (locker, index) => locker[0].toLowerCase().includes(locationString.toLowerCase())
        );

        const spreadLockers = [];

        for (let i = 0; i < filteredLockers.length; i++){

            let spreadArray = filteredLockers[i];

            spreadArray.forEach(
                item => spreadLockers.push(item)
            )


        }

        handleExternalFilter(spreadLockers)





        setTypedLocation(locationString);
        setAvailableLocations(filteredArray);
        setFinalLockers(spreadLockers);




    }
    return (

        <div className="img-background ">
            <div className="img-bg-child ">
                <h1>Find a Locker</h1>
                <div className="input-div dropdown active" id="my-lockers">

              <div className="input" >
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
                                finalLockers.map(
                                    (item, key) => <a href="#my-lockers" key={key}>
                                        {item}
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

import React, {useState} from 'react';
import image3 from '../images/image3.JPG';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {
    Link
} from "react-router-dom";

function SortComponent({externalFilter}) {

    const [sortValue, setSortValue] = useState('Closest');
    const [featured, setFeatured] = useState('Featured');
    const sortArray = [
        {
            value: 'Closest',
            label: 'Closest',
        },
        {
            value: 'Lowest Price',
            label: 'Lowest Price',
        },

    ];

    const featuredArray = [
        {
            value: 'Small',
            label: 'Small',
        },
        {
            value: 'Medium',
            label: 'Medium',
        },
        {
            value: 'Large',
            label: 'Large',
        },


    ];
    const handleSortValue = (event) => {
        setSortValue(event.target.value);
    };

    const handleFeatured = (event) => {
        setFeatured(event.target.value);
    };
    return (

        <section className="sorting-div">
            <div className="locker-sort">
                <div>
                    <p>6 Open Lockers Available</p>
                </div>

                <div className="order-sort">
                    <p>Sort By</p>

                        <TextField
                            id="standard-select-currency"
                            select
                            label=""
                            value={sortValue}
                            onChange={handleSortValue}
                            helperText=""
                        >
                            {sortArray.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                </div>

            </div>

            {/* SECOND DIV */}
            <div className="padding-class main-locker">
                <div className='padding-class img-container'>
                    <img alt="background" src={image3}/>
                    <p className="left-div-child top-pad-class">22A Adeola Odeku Street, VI, Lagos</p>
                    <p> ⭐⭐⭐⭐⭐</p>
                    <p className="left-div-child top-pad-class">0.3 Miles Away   </p>
                </div>

                <div className="left-div">
                    <div className="left-div-input padding-class">

                            <TextField
                                id="standard-select-currency"
                                select
                                label=""
                                value={featured}
                                onChange={handleFeatured}
                                helperText=""
                            >
                                {featuredArray.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>


                       <p className="left-div-child">View the guide size</p>
                    </div>

                    <div className='padding-class'>

                        {   externalFilter.length !== 0 ?
                            externalFilter.map(
                                item => <div className="locker-item">
                                    <h3 className="width-div">{item}</h3>
                                    <h3> n450 per item/mo N15,000 XX no of orders<br></br> Online only price</h3>
                                    <h3> 1N for first rent</h3>
                                    <h3> 2 Available</h3>
                                    <Link to="/rental-page">
                                        <button className="locker-button">
                                            Rent Now
                                        </button>
                                    </Link>

                                </div>
                            ) : <div className="locker-item">
                                    No Lockers Available For this Location
                            </div>

                        }

                    </div>

                    <div>
                        <p className="left-div-child padding-class">View all lockers at this location</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SortComponent;

import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function SortComponent() {

    const [currency, setCurrency] = useState('Closest');
    const currencies = [
        {
            value: 'Closest',
            label: 'Closest',
        },
        {
            value: 'Lowest Price',
            label: 'Lowest Price',
        },

    ];
    const handleChange = (event) => {
        setCurrency(event.target.value);
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
                            value={currency}
                            onChange={handleChange}
                            helperText=""
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                </div>

            </div>

            {/* SECOND DIV */}
            <div className="main-locker">
                <div>
                    <img alt="background"/>
                    <p>Address</p>
                    <p> Starvs</p>
                    <p>0.3 Miles Away   </p>
                </div>

                <div>
                    <div>
                        <div>
                            {/* Dropdown Here */}
                        </div>

                        <div> <p>View the guide size</p></div>
                    </div>

                    <div>
                        <div>
                            <h3> Small H295" W460" D520MM</h3>
                            <h3> n450 per item/no</h3>
                            <h3> 1N for first rent</h3>
                            <h3> 2 Available</h3>
                            <button>
                                Rent Now
                            </button>
                        </div>
                    </div>

                    <div>
                        View all lockers at this location
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SortComponent;

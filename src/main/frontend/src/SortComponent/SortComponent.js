import React from 'react';


function SortComponent() {
    return (

        <div>
            <div className="locker-sort">
                <div>
                    <p>6 Open Lockers Available</p>
                </div>

                <div>
                    <p>Sort By</p>
                    <div>
                        {/* Insert Dropdown With react */}
                    </div>
                </div>

            </div>

            {/* SECOND DIV */}
            <div>
                <div>
                    <img alt="image"/>
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

        </div>
    )
}

export default SortComponent;

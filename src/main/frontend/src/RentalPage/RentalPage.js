import React from 'react';

import {
    Link
} from "react-router-dom";


const RentalPage = () => {
    return (
        <div style={{margin: "45px"}}>
          <Link to="/" >
          <button>Return Home</button>
          </Link>

         <h1>   Navigation to the rental page is successful</h1>
        </div>
    )
}

export default RentalPage;
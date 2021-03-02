import './App.css';
import NavBar from './NavBar/Navbar';
import LockerSearch from './LockerSearch/LockerSearch';
import SortComponent from './SortComponent/SortComponent';
import RentalPage from "./RentalPage/RentalPage";
import {useEffect, useState} from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {


    const [locations, setLocations] = useState([]);
    const [externalFilter, setExternalFilter] = useState([]);
    /* This useState was created to pass real time state from the
        LockerSearch Component to the Sort Component
        to have the data dynamically displayed.*/

    const handleExternalFilter = (finalFilter) => {
        setExternalFilter(finalFilter);
    }
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/lockerData").then(
            (res) => {

                const {data} = res;
              /*  console.log(data);*/
                setLocations(data);
            }
        ).catch((err) => console.log(err));
    }, []);
  return (

      <Router>
          <Switch>
              <Route path="/" exact>
                  <div>
                      <NavBar />
                      <LockerSearch locations={locations} handleExternalFilter={handleExternalFilter}/>
                      <SortComponent externalFilter={externalFilter}/>

                  </div>
              </Route>

              <Route path="/rental-page">
                    <RentalPage />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;

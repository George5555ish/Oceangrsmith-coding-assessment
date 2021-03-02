import './App.css';
import NavBar from './NavBar/Navbar';
import LockerSearch from './LockerSearch/LockerSearch';
import SortComponent from './SortComponent/SortComponent';
import {useEffect, useState} from "react";
import axios from "axios";


function App() {


    const [locations, setLocations] = useState([]);
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
      <div>
        <NavBar />
        <LockerSearch locations={locations}/>
        <SortComponent />

      </div>
  );
}

export default App;

//display a list of location that can be seen by both customers and employees...
//add navbar item that both kind of users can click on
//when clicked, display a list of locations. Display the address and sqft. (using any layout and color desired)

import { useState, useEffect } from "react"
import "./Locations.css"

/*
    1. Set initial state of app
    2. observe the initial state of the app
    3. create jsx code to iterate and display locations
*/


//declare export function...
export const LocationList = () => {

    const [locations, setLocations] = useState([])     // set initial state to empty

    //& LOCATIONS
    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)  //access api/locations
                .then(response => response.json())
                .then((locationArray) => {
                    setLocations(locationArray) //setLocation() sets state to locationArray which is storing information from API...
                })

            console.log("initial status of locations...", locations)
        },
        []
    )

    return <>{

        <article className="locations">
            <h2>LIST OF LOCATIONS</h2>
            {
                locations.map(
                    (location) => {
                        return <section className="location">
                            <header><strong>Name:</strong> {location.name}</header>
                            <footer><strong>Address:</strong> {location.address}</footer>
                        </section>
                    }
                )
            }
        </article >
    }
    </>
}

//reroute locations to webpage...?
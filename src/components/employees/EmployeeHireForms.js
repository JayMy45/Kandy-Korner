//export function to set state useEffects to get data and update state also create form JSX
import { useEffect, useState } from "react"


export const EmployeeHireForms = () => {

    /*
      TODO: Add the correct default properties to the
      initial state object

                          *final output
                "name":     string,
                location:   integer (foreign key),
                start date: date,
                payRate:    integer

  */

    const [locations, setLocations] = useState([])
    const [newHire, setNewHire] = useState({
        name: "",
        location: "", //will parse once sent
        startDate: "",
        payRate: "",

    })



    //& need useEffect to access locations.
    //useEffects are used to observe state...
    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
                .then(response => response.json())
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        []
    )

    // console.log(locations)


    return (
        <form className="employee__new-hire">
            <h2 className="employee__form-title">New Hires</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Enter Full Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Name of Kandy"
                        value="{product.name.CHANGE}"
                        onChange={() => { }} />
                </div>
            </fieldset>

            <fieldset>
                <div><h3>Choose a Location: </h3></div>
                <select className="form-group">
                    <option>Pick One</option>
                    {locations.map(
                        (location) => {
                            return <option
                                name="location"
                                className="form-control dropdown"
                                value={location.id}
                                key={`location--${location.id}`}
                                onChange={
                                    () => { }
                                }>{location.name}</option>
                        }
                    )}
                </select>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employee__start_date">Start Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value="{product.date.CHANGE}"
                        onChange={() => { }} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employee__rate">Enter Hourly Rate:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Hourly Rate"
                        value="{product.price.CHANGE}"
                        onChange={() => { }} />
                </div>
            </fieldset>

            <button className="btn_new-hire">Submit New Hire</button>
        </form>
    )
}
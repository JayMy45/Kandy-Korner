//export function to set state useEffects to get data and update state also create form JSX
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const EmployeeHireForms = () => {

    /*
      TODO: Add the correct default properties to the
      initial state object
    ----
    COLOR GUIDE
    & pink
    ! red
    ? blue
    * neonGreen
    ~ purple
    TODO orange
      -----

This is how the data is stored on the server there fore the post will need to output the same information
* need the updated id from User database structure POST'd first before Employee POST can have an updated userID
         ~ Database Structure (User)
?                   id: 1, (will be updated by JSON.server no need to include in final output)
                    fullName: "string",
                    email: "string",
                    isStaff: Boolean

         ~ Database Structure (Employee)
 ?                  "id": 1, (will be updated by JSON.server no need to include in final output)
                    email: "string",
                    startDate: "string",
                    rate: integer,
                    userId: integer,
                    locationId: integer

      
                        *final output
                    "name":     string,
                    location:   integer (foreign key),
                    start date: date,
                    payRate:    integer

  */

    //! State for New Hires
    const [newHire, setNewHire] = useState({
        name: "",
        location: 0, //will parse once sent
        email: "",
        startDate: 0,
        payRate: 0,

    })

    //! State for updated NewHire data 
    const [updatedHire, setUpdateHire] = useState({})


    // ~ variable to facilitate navigating different routes.
    const navigate = useNavigate()

    //! state for locations 
    const [locations, setLocations] = useState([])

    //& need useEffect to access locations.  Sets location with database info fetched.
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


    //POST newHire information from user inputs in form to database.json
    const createNewHireUser = (event) => {
        event.preventDefault()

        const newHireUserDatabase = {
            fullName: newHire.name,
            email: newHire.email,
            isStaff: true
        }

        const newHireEmployeeDatabase = {
            email: newHire.email,
            startDate: newHire.startDate,
            rate: parseFloat(parseFloat(newHire.payRate).toFixed(2)),
            //userId: integer will be updated in post after newHireUserDatabase push has new id.
            locationId: parseInt(newHire.location)
        }


        fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHireUserDatabase)
        })
            .then(response => response.json())
            .then((newHireObject) => {
                //update updatedHire State...
                newHireEmployeeDatabase.userId = newHireObject.id

                fetch(`http://localhost:8088/employees`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newHireEmployeeDatabase)
                })
                    .then(response => response.json())
                    .then(() => {
                        navigate("/employees")
                    }
                    )
            }
            )
    }

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
                        placeholder="Enter Full Name"
                        value={newHire.name}
                        onChange={(evt) => {
                            const copy = { ...newHire }
                            copy.name = evt.target.value
                            setNewHire(copy)
                        }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Email:</label>
                    <input
                        required autoFocus
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                        value={newHire.email}
                        onChange={(evt) => {
                            const copy = { ...newHire }
                            copy.email = evt.target.value
                            setNewHire(copy)
                        }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div><h3>Choose a Location: </h3></div>
                <select className="form-group"
                    onChange={
                        (evt) => {
                            const copy = { ...newHire }
                            copy.location = evt.target.value
                            setNewHire(copy)
                        }
                    }>
                    <option value={0}>Pick One</option>
                    {locations.map(
                        (location) => {
                            return <option
                                name="location"
                                className="form-control dropdown"
                                value={location.id}
                                key={`location--${location.id}`}
                            >{location.name}</option>
                        }
                    )}
                </select>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employee__start_date">Start Date: </label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={newHire.startDate}
                        onChange={(evt) => {
                            const copy = { ...newHire }
                            copy.startDate = evt.target.value
                            setNewHire(copy)
                        }} />
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
                        value={newHire.payRate}
                        onChange={(evt) => {
                            const copy = { ...newHire }
                            copy.payRate = evt.target.value
                            setNewHire(copy)
                        }} />
                </div>
            </fieldset>

            <button className="btn_new-hire" onClick={(ClickEvent) => createNewHireUser(ClickEvent)}> Submit New Hire</button>
        </form >
    )
}
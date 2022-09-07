//export function to set state useEffects to get data and update state also create form JSX
import { useState } from "react"


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



    const [newHire, setNewHire] = useState({
        name: "",
        location: "",
        startDate: "",
        payRate: "",

    })

}

return <h1>Hellow Worldie</h1>
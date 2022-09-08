//creating a prop from EmployeeList to create jsx code while the information is sent from EmployeeLists

import { Link } from "react-router-dom"

//declare export function to return jsx code.
//parameter are the props (aka properties) deconstructed into object. From EmployeeList.js 
export const Employees = ({ fullName, id, email, startDate }) => {
    //return form structure for Employees to be displayed
    return <>

        {

            <section className="employee" key={`employee--${id}`}>
                <div className="employee__fullName">
                    <Link to={`/employees/${id}`}>{fullName}</Link>
                </div>
                <div><strong>Email:</strong> {email}</div>
                <div><strong>start Date:</strong>{startDate}</div>
            </section>

        }
    </>
}

//creating a prop from EmployeeList to create jsx code while the information is sent from EmployeeLists

import { Link } from "react-router-dom"

//declare export function to return jsx code.
//parameter are the props (aka properties) deconstructed into object. From EmployeeList.js 
export const Customers = ({ name, email, id }) => {
    //return form structure for Employees to be displayed
    return <>

        {

            <section className="customer" key={`customer--${id}`}>
                <div className="customer__fullName">
                    <Link to={`/customers/${id}`}>{name}</Link>
                </div>
                <div><strong>Email: </strong>{email}</div>
            </section>

        }
    </>
}

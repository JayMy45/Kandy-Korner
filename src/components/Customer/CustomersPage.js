import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Employees } from "./Employees"
import "./Employee.css"

//!!!     this module sets state and sends props
/*
~ database structure for customers
?       id: 1,
        email: "string",
        loyaltyId: number,
        userId: number

*/

export const CustomerPage = () => {


    const [customers, setCustomers] = useState([])
    const navigate = useNavigate()


    useEffect(
        () => {
            fetch(`http://localhost:8088/customers`)
                .then(response => response.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )

    return <>
        {/* {
            <button className="btn__create" onClick={() => navigate("/customers")}>Customers</button>
        } */}
        <article className="customers">

            {
                customers.map(customer => <Customer key={`customer--${customer.id}`}
                    id={customer.id}
                    fullName={customer.user.fullName}
                    email={customer.email}
                    startDate={customer.startDate} />)
            }

        </article>
    </>
}
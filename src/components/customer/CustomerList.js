import { useEffect, useState } from "react"
import { Customers } from "./Customers"
import "./Customer.css"

//!!!     this module sets state and sends props
// This is the module that needs to be routed to in EmployeeViews (not customers...)
/*
~ database structure for customers
?       id: 1,
        email: "dr_nathanwilliams04@gmail.com",
        loyaltyId: 262533,
        userId: 19,
        user: {
                fullName: "Nathan William, PhD",
                email: "dr_nathanwilliams04@gmail.com",
                isStaff: false,
                id: 19

*/

export const CustomerList = () => {


    const [customers, setCustomers] = useState([])



    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user`)
                .then(response => response.json())
                .then((employeeArray) => {
                    setCustomers(employeeArray)
                })
        },
        []
    )

    return <article className="customers">

        {
            customers.map(customer => <Customers key={`customer--${customer.id}`}
                name={customer.user.fullName}
                email={customer.email}
                loyaltyId={customer.loyaltyId} />)
        }

    </article>
}
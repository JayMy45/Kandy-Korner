//This module will export customer Details whenever the link there is clicked.
//the CustomerDetail module will export JSX elements to build the following details
/*
the details will display the customers 
        name:
        email:
        loyaltyId:

will create a custom Id that will be used to update website .useParam()
*/

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Customer.css"


export const CustomerDetails = () => {

    //set initial state to empty array
    const { customerId } = useParams()
    //deconstruct Object for Id/information
    const [customers, setCustomer] = useState()


    //fetch data from database.json
    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleCustomer = data[0] //data is only a placeholder and can be named anything
                    setCustomer(singleCustomer)
                })
        },
        [customerId] //whenever the state of customerId changes information will be fetched
    )



    return <section className="customer__details">

        <header className="customer__details--header"><strong>{customers?.user?.fullName}</strong></header>
        <div className="customer__details--div"><strong>Email:</strong> {customers?.email}</div>
        <div className="customer__details--div"><strong>Loyalty Number:</strong> {customers?.loyaltyId}</div>

    </section >
}
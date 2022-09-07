import { useEffect, useState } from "react"
import "./Employee.css"

export const EmployeeList = () => {


    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees?_expand=user`)
                .then(response => response.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        []
    )

    return <article className="employees">
        <h2>Employees</h2>
        {
            employees.map(employee => {
                return <section className="employee" key={`employee--${employee.id}`}>
                    <div><strong>name:</strong> {employee.user.fullName}</div>
                    <div><strong>email:</strong> {employee.email}</div>
                    <div><strong>start Date:</strong> {(new Date(employee.startDate).toLocaleDateString("en-US"))}</div>
                </section>
            })
        }

    </article>

}
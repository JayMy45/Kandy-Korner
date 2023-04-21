import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Employees } from "./Employees"
import "./Employee.css"

export const EmployeeList = () => {


    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()


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

    return <>
        {
            <button className="btn__create" onClick={() => navigate("/employees/create")}>Create New Hire</button>
        }
        <article className="employees">

            {
                employees.map(employee => <Employees key={`employee--${employee.id}`}
                    id={employee.id}
                    fullName={employee.user.fullName}
                    email={employee.email}
                    startDate={employee.startDate} />)
            }
        </article>
    </>
}
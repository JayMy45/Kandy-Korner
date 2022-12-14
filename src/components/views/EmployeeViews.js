import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerDetails } from "../customer/CustomerDetails"
import { CustomerList } from "../customer/CustomerList"
import { EmployeeHireForms } from "../employees/EmployeeHireForms"
import { EmployeeList } from "../employees/EmployeeList"
import { LocationList } from "../locations/LocationList"
import { ProductForm } from "../products/ProductForm"
import { ProductList } from "../products/ProductList"


export const EmployeeViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>All the Kandy you could imagine...</div>
                    <Outlet />

                </>
            }>

                <Route path="locations" element={<LocationList />} />

                <Route path="products" element={
                    <>
                        <ProductList />
                    </>
                    //productSearch and productList positioning determines how it renders onto page...see above
                } />

                <Route path="products/create" element={<ProductForm />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/employees/create" element={<EmployeeHireForms />} />
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/:customerId" element={<CustomerDetails />} />


            </Route>
        </Routes >
    )

}

//customerId is a parameter (this is how parameters are defined in react.js within links) that will be used whenever a customerId (defined in CustomerDetails.js) is clicked...

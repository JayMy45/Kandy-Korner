import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { ProductContainer } from "../products/ProductContainer"
import { FindProduct } from "../products/FindProduct"
import { ProductList } from "../products/ProductList"



export const CustomerViews = () => {
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
                <Route path="products" element={<ProductList />} />

                <Route path="find" element={
                    <>
                        <ProductContainer />
                    </>
                    //productSearch and productList positioning determines how it renders onto page...see above
                } />




            </Route>
        </Routes >
    )

}

//     <Route path="products/create" element={<ProductForm />} />  ***REMOVED BECAUSE CUSTOMER WONT BE CREATING NEW CANDIES***
// if this route had remained as a route the customers would be able to manually type in route and access create page

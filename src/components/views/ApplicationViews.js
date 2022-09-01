import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { ProductList } from "../products/ProductList"


export const ApplicationViews = () => {
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

			</Route>
		</Routes >
	)

}
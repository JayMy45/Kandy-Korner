import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { ProductForm } from "../products/ProductForm"
import { ProductList } from "../products/ProductList"
import { ProductSearch } from "../products/ProductSearch"


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

				<Route path="products" element={
					<>
						<ProductSearch />
						<ProductList />
					</>
					//productSearch and productList positioning determines how it renders onto page...see above
				} />

				<Route path="products/create" element={<ProductForm />} />


			</Route>
		</Routes >
	)

}

import { Outlet, Route, Routes } from "react-router-dom"



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

			</Route>
		</Routes >
	)

}
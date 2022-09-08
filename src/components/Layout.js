import TitleBar from "./TitleBar"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

export default function() {
	return (
		<div class="flex flex-col px-3">
			<TitleBar />
			<Outlet />
			<NavBar />
		</div>
	)
}
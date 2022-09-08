import { Home, Shuffle } from "react-feather"
import { NavLink } from "react-router-dom"

export default function NavBar() {
	return (
		<nav className="navbar fixed bottom-0 flex justify-around py-2 w-full">
			<NavLink to="/">
				<Home />
			</NavLink>
			<NavLink to="/playlist">
				<Shuffle />
			</NavLink>
		</nav>
	)
}
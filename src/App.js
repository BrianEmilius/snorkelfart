import { AnimatePresence } from "framer-motion"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";

function App() {
	

	return (
		<AnimatePresence>
			<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/playlist" element={<Playlist/>} />
				</Route>
			</Routes>
			</BrowserRouter>
		</AnimatePresence>
	);
}

export default App;

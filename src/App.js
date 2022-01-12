import Home from "./Screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Cart from "./components/Cart";

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}>
						<Route path='main' element={<Main />} />
						<Route path='cart' element={<Cart />} />
					</Route>
					<Route path='/*' element={<p>error 404</p>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

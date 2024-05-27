import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import Contacts from './pages/Contacts';
import SharedLayout from './pages/SharedLayout';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route index element={<Home />} />
						<Route path="/dogs" element={<Dogs />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="*" element={<h1>404 Not Found</h1>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

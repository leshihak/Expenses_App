import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Auth from './components/Auth/Auth';
import HomePage from './components/HomePage/HomePage';

const App: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/about" element={<About />} />
			<Route path="/auth" element={<Auth />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	</BrowserRouter>
);

export default App;

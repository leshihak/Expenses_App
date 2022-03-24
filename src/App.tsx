import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Auth from './components/Auth/Auth';
import Currency from './components/Currency/Currency';
import Dashboard from './components/Dashboard/Dashboard';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/currency" element={<Currency />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default App;

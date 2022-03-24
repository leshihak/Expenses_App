import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Auth from './components/Auth/Auth';
import Currency from './components/Currency/Currency';
import Dashboard from './components/Dashboard/Dashboard';
import Drawer from './components/ui/Drawer/Drawer';

const App: FC = () => (
  <Drawer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/currency" element={<Currency />} />
      </Routes>
    </BrowserRouter>
  </Drawer>
);

export default App;

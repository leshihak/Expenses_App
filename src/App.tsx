import { getApp, getApps } from 'firebase/app';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Auth from './components/Auth/Auth';
import Currency from './components/Currency/Currency';
import Dashboard from './components/Dashboard/Dashboard';
import MonobankAuth from './components/MonobankAuth/MonobankAuth';
import StatementList from './components/StatementList/StatementList';
import { app } from './config/firebase';
import { AuthUserProvider } from './hooks/useAuth';

getApps().length === 0 ? app : getApp();

const App: FC = () => (
  <AuthUserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/statement" element={<StatementList />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/monobank-auth" element={<MonobankAuth />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </AuthUserProvider>
);

export default App;

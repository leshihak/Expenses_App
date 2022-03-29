import { getApps, getApp } from 'firebase/app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Auth from './components/Auth/Auth';
import Currency from './components/Currency/Currency';
import Dashboard from './components/Dashboard/Dashboard';
import MonobankAuth from './components/MonobankAuth/MonobankAuth';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import StatementList from './components/StatementList/StatementList';
import { app } from './config/firebase';
import { AuthProvider } from './hooks/useAuth';

getApps().length === 0 ? app : getApp();

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/statement" element={<StatementList />} />
          <Route path="/monobank-auth" element={<MonobankAuth />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;

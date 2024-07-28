import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Orders from './components/Orders';
import Products from './components/Products';
import Users from './components/Users';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
import ThemeContextProvider from './context/ThemeContextProvider';
import Customers from './components/Customers';

function App() {
  return (
    <ThemeContextProvider>
      <Router >
        <div className='flex '>
          
          <Sidebar />
          
          <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
          <Navbar />
          
            <Routes >
              <Route  path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;

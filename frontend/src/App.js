import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState,useEffect } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import SplashScreen from './SplashScreen';
import 'font-awesome/css/font-awesome.min.css';

function App() {

  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="App">
      <Router>
        <ToastContainer theme="dark" position="top-center" />
        <Header cartItems={cartItems} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Home />} />
          <Route 
            path='/product/:id' 
            element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} 
          />
          <Route 
            path='/cart' 
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} 
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}
export default App;

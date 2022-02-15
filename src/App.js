import { Routes, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import Products from './pages/Products';
import Confirmation from './pages/Confirmation';

import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Products />} exact />
            <Route path="/cart" element={<Cart />} exact />
            <Route path="/confirmation" element={<Confirmation />} exact />
        </Routes>
    );
}

export default App;

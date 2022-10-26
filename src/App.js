import { Routes, Route } from 'react-router-dom';

import NavbarLayout from 'layouts/NavbarLayout';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Confirmation from './pages/Confirmation';

function App() {
    return (
        <Routes>
            <Route path="/" element={<NavbarLayout />} >
                <Route path="" element={<Products />} exact/>
                <Route path="cart" element={<Cart />} exact />
                <Route path="confirmation" element={<Confirmation />} exact />
            </Route>
        </Routes>
    );
}

export default App;

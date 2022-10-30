import { Routes, Route } from "react-router-dom";

import NavbarLayout from "layouts/NavbarLayout";
import { Cart, Products, Confirmation } from "pages";
import ROUTES from "routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<NavbarLayout />}>
        <Route path="" element={<Products />} exact />
        <Route path={ROUTES.cart} element={<Cart />} exact />
        <Route path={ROUTES.confirmation} element={<Confirmation />} exact />
      </Route>
    </Routes>
  );
}

export default App;

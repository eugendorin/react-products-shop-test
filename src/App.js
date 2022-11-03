import { Routes, Route } from "react-router-dom";
import NavbarLayout from "layouts/NavbarLayout";
import { Cart, Products, Confirmation, NotFound } from "pages";
import ROUTES from "routes";
import { Suspense } from "react";
import { LoadingSpinner } from "components";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<NavbarLayout />}>
        <Route
          path=""
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Products />
            </Suspense>
          }
          exact
        />
        <Route
          path={ROUTES.cart}
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Cart />
            </Suspense>
          }
          exact
        />
        <Route
          path={ROUTES.confirmation}
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Confirmation />
            </Suspense>
          }
          exact
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

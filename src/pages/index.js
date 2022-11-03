import { lazy } from "react";

import NotFound from "./NotFound";

const Cart = lazy(() => import("./Cart"));
const Confirmation = lazy(() => import("./Confirmation"));
const Products = lazy(() => import("./Products"));

export { Cart, Confirmation, NotFound, Products };

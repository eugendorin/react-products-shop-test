import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { fetchProducts } from "store/product";
import { addProduct } from "store/cart";
import { usePaginatedItems } from "hooks";
import { LoadingSpinner, Pagination } from "components";
import { Product } from "./Product";

export function Products() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [pageProducts, activePage, changePage, pagesArray] = usePaginatedItems(
    products,
    1
  );
  const scrollableEl = useRef(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (scrollableEl.current) {
      scrollableEl.current.scroll({ behavior: "smooth", top: 0 });
    }
  }, [activePage, scrollableEl]);

  const onAddToCart = (product) => dispatch(addProduct(product));

  if (loading) return <LoadingSpinner />;

  return (
    <div className="overflow-scroll h-100 w-100 navbar-pt" ref={scrollableEl}>
      <Container className="h-100 d-flex flex-column">
        <h1 className="page-heading">Products</h1>

        <div className="grid text-center flex-grow-1">
          {pageProducts.map((product) => {
            const { name, id, shortDescription, image, price } = product;
            return (
              <div className="g-col-12 g-col-sm-6 g-col-lg-4" key={id}>
                <Product
                  name={name}
                  description={shortDescription}
                  image={image}
                  price={price}
                  onClick={() => onAddToCart(product)}
                />
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-center align-items-center mt-5">
          <Pagination
            activePage={activePage}
            changePage={changePage}
            pagesArray={pagesArray}
          />
        </div>
      </Container>
    </div>
  );
}

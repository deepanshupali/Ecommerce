import styled from "styled-components";

import Product from "./Product";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
  }, [dispatch]);

  const clothingProducts = products.filter((item) =>
    item.category.includes("clothing")
  );
  return (
    <Container>
      {clothingProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;

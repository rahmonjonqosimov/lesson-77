import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/productsApi";
import SingleProduct from "../../components/singleProduct/SingleProduct";

const SingleRoute = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductsQuery(id);
  return <>{isLoading ? <h1>Loading...</h1> : <SingleProduct data={data} />}</>;
};

export default SingleRoute;

import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";

type Props = {};

const ProductDetail = (props: Props) => {
  //const location = useLocation(); //query string
  const params = useParams<{ id: string }>(); // location
  const [product, setProduct] = useState<ProductModel>();

  useEffect(() => {
    if (params.id) {
      fetchProductId(params.id);
    }
  }, [params.id]);

  const fetchProductId = async (id: string) => {
    try {
      const response = await ProductService.getById(parseInt(id));
      setProduct(response.data);
    } catch (e) {
      console.error("Error fetching products:");
    }
  };

  return (
<div className="container mt-5">
      <h2>{product?.title}</h2><br />
      <h6>Description : {product?.description}</h6>
      <h6>Price : {product?.price}</h6>
      <h6>DiscountPercentage : {product?.discountPercentage}</h6>
      <h6>Rating : {product?.rating}</h6>
      <h6>Stock : {product?.stock}</h6>
      <h6>Brand : {product?.brand}</h6>
      <h6>Category : {product?.category}</h6>
      <h6>Thumbnail : {product?.thumbnail}</h6>
    </div>
  );
};
export default ProductDetail;

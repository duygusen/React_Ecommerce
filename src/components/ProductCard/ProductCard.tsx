import React from "react";
import {ProductModel} from "../../models/responses/ProductModel";
import {Link} from "react-router-dom";
import ProductService from "../../services/productService";
import {HttpStatusCode} from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";

type Props = {
	product: ProductModel;
	onDelete: (id: number) => void;
	title?: string; // (opsiyonel)
};

const ProductCard = (props: Props) => {


	const deleteProduct = async () => {
		try {
			const response = await ProductService.delete(props.product.id);
			console.log(response);
			if (response.status == HttpStatusCode.Ok) {
				props.onDelete(props.product.id);
				alert("Product deleted successfully");
			}
		} catch (e) {
			alert("Product cannot be deleted");
		}
	};

	const dispatch = useDispatch();
	const addProductToCart = () => {
		dispatch(addToCart(props.product));
	};

	return (
		<div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<p>{props.product.price}₺</p>
				<Link
					to={"/product-detail/" + props.product.id}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button onClick={addProductToCart} className="btn btn-secondary">Add</button>
				<button
					onClick={() => {
						deleteProduct();
					}}
					className="btn btn-danger"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ProductCard;

import React, {useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductService from "../../services/productService";
import {ProductModel} from "../../models/responses/ProductModel";

type Props = {};

const Homepage = (props: Props) => {
	const [products, setProducts] = useState<ProductModel[]>([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const onProductDelete = (id: number) => {
		setProducts(products.filter(i => i.id !== id));
	};

	const fetchProducts = async () => {

		try{
			const response = await ProductService.getAll();
			setProducts(response.data.products);

		} catch (e){
			console.error('Error fetching products:')
		}
	};

	return (
		<div className="container">
			<div className="row">
				{products.map(product => (
					<div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
						<ProductCard onDelete={onProductDelete} product={product} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Homepage;

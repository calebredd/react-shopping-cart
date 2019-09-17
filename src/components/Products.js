import React, { useContext } from 'react';
import { ProductsContext } from "../contexts/CartContext";
// Components
import Product from './Product';

const Products = props => {
	const products = useContext(ProductsContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;

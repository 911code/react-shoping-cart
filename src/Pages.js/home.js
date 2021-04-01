import React, { useState } from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
import Cart from "../components/Cart";
import data from "../data.json";

function Home() {
	const [product, setProduct] = useState({
		products: data.products,
		size: "",
		sort: "",
	});
	return (
		<div>
			<div className='content'>
				<div className='main'>
					<Filter />
					<Products data={product.products} />
				</div>
			</div>

			<div className='sidebar'>
				<Cart />
			</div>
		</div>
	);
}

export default Home;

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

	const sortProduct = (e) => {
		const sort = e.target.value;
		setProduct({
			sort,
			products: product.products
				.slice()
				.sort((a, b) =>
					sort === "lowest"
						? a.price > b.price
							? 1
							: -1
						: sort === "hightest"
						? a.price < b.price
							? 1
							: -1
						: a._id < b._id
						? 1
						: -1
				),
		});
		console.log("sortProduct", sort, product);
	};
	const filterProducts = (e) => {
		const size = e.target.value;
		size === ""
			? setProduct({
					sort: product.sort,
					size,
					products: data.products,
			  })
			: setProduct({
					sort: product.sort,
					size,
					products: data.products.filter(
						(product) => product.availableSizes.indexOf(size) >= 0
					),
			  });
	};
	return (
		<div>
			<div className='content'>
				<div className='main'>
					<Filter
						count={product.products.length}
						size={product.size}
						sort={product.sort}
						filterHandler={filterProducts}
						sortHandler={sortProduct}
					/>
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

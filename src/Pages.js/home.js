import React, { useState } from "react";
import Filter from "../components/Filter";
import Products from "../components/Products";
import Cart from "../components/Cart";
import data from "../data.json";

function Home() {
	const [product, setProduct] = useState({
		products: data.products,
		carts: localStorage.getItem("carts")
			? JSON.parse(localStorage.getItem("carts"))
			: [],
		size: "",
		sort: "",
	});

	const sortProduct = (e) => {
		const sort = e.target.value;
		setProduct({
			...product,
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
	};
	const filterProducts = (e) => {
		const size = e.target.value;
		size === ""
			? setProduct({
					...product,
					sort: product.sort,
					size,
					products: data.products,
			  })
			: setProduct({
					...product,
					sort: product.sort,
					size,
					products: data.products.filter(
						(product) => product.availableSizes.indexOf(size) >= 0
					),
			  });
	};
	const addToCart = (item) => {
		const carts = product.carts.slice();
		let alreadyincart = false;
		carts.forEach((cart) => {
			if (cart._id === item._id) {
				cart.count++;
				alreadyincart = true;
			}
		});
		if (!alreadyincart) {
			carts.push({ ...item, count: 1 });
		}
		setProduct({ ...product, carts });
		localStorage.setItem("carts", JSON.stringify(carts));
	};
	const removeFromCart = (item) => {
		const carts = product.carts.slice();
		const newcarts = carts.filter((x) => x._id !== item._id);
		setProduct({ ...product, carts: newcarts });
		localStorage.setItem("carts", JSON.stringify(newcarts));
	};
	const infohandler = (order) => {
		console.log(order);
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
					<Products data={product.products} addToCart={addToCart} />
				</div>
				<div className='sidebar'>
					<Cart
						cart={product.carts}
						removeFromCart={removeFromCart}
						infohandler={infohandler}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;

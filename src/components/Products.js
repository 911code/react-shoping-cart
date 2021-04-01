import React from "react";
// hello

function Products({ data }) {
	const formatCurrency = (num) => {
		return ` $ ${Number(num.toFixed(2)).toLocaleString()} `;
	};
	return (
		<div>
			<ul className='products'>
				{data.map((item) => {
					const { _id, image, title, price } = item;
					return (
						<li key={_id}>
							<div className='product'>
								<a href={`# ${_id}`}>
									<img src={image} alt={title} />
									<p>{title}</p>
								</a>
								<div className='product-price'>{formatCurrency(price)}</div>
								<button className='button primary'>Add To Chart</button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Products;

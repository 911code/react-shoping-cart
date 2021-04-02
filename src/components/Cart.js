import React, { useState } from "react";

function Cart({ cart, removeFromCart, infohandler }) {
	const [showCheckout, setShowCheckout] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		address: "",
	});
	const handleInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const SubmitHandler = (e) => {
		e.preventDefault();
		const info = {
			...form,
			cart,
		};
		infohandler(info);
	};
	const formatCurrency = (num) => {
		return ` $ ${Number(num.toFixed(2)).toLocaleString()} `;
	};
	return (
		<div>
			{cart.length === 0 ? (
				<div className='cart cart-header '> Cart is empty</div>
			) : (
				<div className='cart cart-header '>
					You have{" "}
					{cart.length === 1
						? `${cart.length} product item`
						: `${cart.length} products items`}{" "}
				</div>
			)}
			<div>
				<div className='cart'>
					<ul className='cart-items'>
						{cart.map((item) => {
							const { _id, image, price, title, count } = item;
							return (
								<li key={_id}>
									<div>
										<img src={image} alt={title}></img>
									</div>
									<div>
										<div>{title}</div>
										<div className='right'>
											{formatCurrency(price)} x {count}{" "}
											<button
												className='button'
												onClick={() => removeFromCart(item)}>
												Remove
											</button>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				{cart.length !== 0 && (
					<div>
						<div className='cart'>
							<div className='total'>
								<div>
									Total:{" "}
									{formatCurrency(
										cart.reduce((a, c) => a + c.price * c.count, 0)
									)}
								</div>
								<button
									onClick={() => {
										setShowCheckout((showCheckout) => !showCheckout);
									}}
									className='button primary'>
									Proceed
								</button>
							</div>
						</div>

						{showCheckout && (
							<div className='cart'>
								<form onSubmit={SubmitHandler}>
									<ul className='form-container'>
										<li>
											<label>Email</label>
											<input
												value={form.email}
												name='email'
												type='email'
												required
												onChange={handleInput}></input>
										</li>
										<li>
											<label>Name</label>
											<input
												value={form.name}
												name='name'
												type='text'
												required
												onChange={handleInput}></input>
										</li>
										<li>
											<label>Address</label>
											<input
												value={form.address}
												name='address'
												type='text'
												required
												onChange={handleInput}></input>
										</li>
										<li>
											<button className='button primary' type='submit'>
												Checkout
											</button>
										</li>
									</ul>
								</form>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default Cart;

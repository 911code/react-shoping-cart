import React from "react";

function Filter({ count, sort, size, filterHandler, sortHandler }) {
	return (
		<div className='filter'>
			<div className='filter-result'>
				{" "}
				{count > 1 ? `${count} products ` : `${count} product`}{" "}
			</div>
			<div className='filter-sort'>
				Order{" "}
				<select value={sort} onChange={(e) => sortHandler(e)}>
					<option>Latest</option>
					<option value='lowest'>Lowest</option>
					<option value='hightest'>Hightest</option>
				</select>
			</div>
			<div className='filter-size'>
				Filter{" "}
				<select value={size} onChange={(e) => filterHandler(e)}>
					<option value=''>ALL </option>
					<option value='XS'>XS </option>
					<option value='S'> S</option>
					<option value='M'> M</option>
					<option value='L'> L</option>
					<option value='XL'>XL </option>
					<option value='XXL'>XXL </option>
				</select>
			</div>
		</div>
	);
}

export default Filter;

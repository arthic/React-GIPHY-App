import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = ['xbox series x'] }) => {
	// const categories = ['Naruto', 'Goku', 'Xbox']
	/* const [categories, setCategories] = useState([
			'DMT'
		]) */
	const [categories, setCategories] = useState(
		defaultCategories
	)
	return(
		<>
			<section id="search">
				<h2 className="animate__animated animate__bounceInDown">GIPHY App</h2>
				<div className="powered">
					<p>Powered by</p>
					<a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">
						<img alt="giphy" src="./assets/giphy.png" />
					</a>
				</div>
				<AddCategory setCategories={setCategories}/>
			</section>
			{/* <button onClick={handleAdd}>Agregar</button> */}
			<div className="border-gradient">
			</div>
			<ol>
			{
				categories.map(category =>
					<GifGrid
					className="animate__animated animate__bounceInLeft"
					key={category}
					category={category}
					/>)
			}
			</ol>
		</>
	)
}
export default GifExpertApp

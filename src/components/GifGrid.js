import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
	// state es el producto del custom hook
	// desestructuracion de la imagen
	const {data:images, loading} = useFetchGifs(category)
	return (
		<>
			<h3 className="animate__animated animate__bounceInLeft">{category}</h3>
			{loading && <p className="loading animate__animated animate__flash"><i className="fas fa-cloud-download-alt"></i></p>}
			{
				<div className="card-grid">
					{
						images.map( img => (
							<GifGridItem
							key={img.id}
							{... img}
							/>
						))
					}
				</div>
			}
		</>
	)
}
GifGrid.propTypes = {
	category: PropTypes.string.isRequired
}

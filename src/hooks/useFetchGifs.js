import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
	const [state, setstate] = useState({
		data: [],
		loading: true
	})
	// Solo se dispara cuando cambia la categoria
	useEffect( () => {
		// Hace la peticion HTTP
		getGifs(category)
			.then(imgs => {
				setTimeout(() => {
					setstate({
						data: imgs,
						loading: false
					})
				}, 2000)
			})
	/* [] Lista(array) de dependencias, "al estar vacio
	solo se disparará una vez" */
	}, [category])
	return state
}

export const getGifs = async(category) => {
	let busqueda = encodeURI(category)
	let limite = 5
	let api_key = '2IDDMxHiBLRYjwyssTt4gXpYUJNfpakN'
	const url = `https://api.giphy.com/v1/gifs/search?q=
				${busqueda}
				&limit=${limite}
				&api_key=${api_key}`

	const resp = await fetch(url)
	/* Desestructuracion de los datos*/
	const {data} = await resp.json()

	/*Mutamos el arreglo:
	Dentro de los datos iteramos los que nos interesan*/
	const gifs = data.map( img => {
		return {
			id: img.id,
			title: img.title,
			/* url: img.images?.downsized_medium.url
			por si no contine url las imagenes*/
			url: img.images.downsized_medium.url
		}
	})
	return gifs
}
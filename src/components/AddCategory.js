import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
	/* Deja el string vacio para que no te marque error ya que
	si no hay comillas recibe undefined*/
	const [inputValue, setInputValue] = useState('')
	const handleInputChange = (e) => {
		// console.log(e.target.value);
		setInputValue(e.target.value)
		console.log('Cambio el input');
	}
	const handleSubmit = (e) => {
		/*Comportamiento por defecto del formulario es la
		recarga de la pagina*/
		e.preventDefault()
		console.log('handleSubmit', inputValue);

		if (inputValue.trim().length > 2) {
			// Se llama como callback que tiene el estado anterior
			setCategories(cats => [inputValue, ...cats])
			setInputValue('')
		}
	}
	/* const handleFocusChange = (e) => {
		setInputValue(e.target.value)
		// console.log(valorDefault);
		// setInputValue(e.target.value='')
		console.log(e.target.value);
		if (e.target.value === 'Busca un GIF!!!') {
			setInputValue(e.target.value='')
		}
		console.log(e.target.value);
	}*/
	return (
		/* El fragment "<>" agrupa elementos HTML o JSX, al usar
		un Form ya se esta agrupando el elemento, por lo tanto ya
		no es necesario el fragment*/
		<form onSubmit={handleSubmit}>
			<div className="search-contend">
				<i className="fas fa-search"></i>
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					// onFocus={handleFocusChange}
				/>
			</div>
		</form>
	)
}
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}
export default AddCategory

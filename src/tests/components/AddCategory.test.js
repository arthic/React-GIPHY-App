import React  from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
	// Mejor manejo del testing de la funcion que recibe
	const setCategories = jest.fn()
	let wrapper = shallow(<AddCategory setCategories={setCategories} />)

	// Limpia los test o mooks para evitar conflictos
	beforeEach( () => {
		jest.clearAllMocks()
		wrapper = shallow(<AddCategory setCategories={setCategories} />)
	})
	test('Despliege correcto de <AddCategory />', () => {
		expect(wrapper).toMatchSnapshot()
	})
	test('Debe cambiar caja de texto', () => {
		const input = wrapper.find('input')

		// Definir el evento {e}
		const value = 'Hola Cambio'
		input.simulate('change', {target: {value}})
	})
	test('No manda información a traves de submit', () => {
		wrapper.find('form').simulate('submit', {
			preventDefault(){}
		})
		// Que no retorne ningun valor en "inputValue"
		expect(setCategories).not.toHaveBeenCalled()
	});
	test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
		const value = 'Hola cambio'
		// 1.- Simular input change
		wrapper.find('input').simulate('change', {target:{value}})
		// 2.- simular el submit
		wrapper.find('form').simulate('submit', { preventDefault(){} })
		// 3.- setCategories se debe haner llamado
		expect(setCategories).toHaveBeenCalled()
		expect(setCategories).toHaveBeenCalledTimes(1)
		expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
		// 4.- El valor del input debe de estar ''
		expect(wrapper.find('input').prop('value')).toBe('')
	})
});

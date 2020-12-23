import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Testing de <GifExpertApp />', () => {

	test('Despliegue correcto de <GifExpertApp />', () => {
		const wrapper = shallow(<GifExpertApp />)
		expect(wrapper).toMatchSnapshot()
	})
	test('Debe mostrar la lista de categorias', () => {
		const categories = ['Test-01', 'Test-02']
		const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
		expect(wrapper.find('GifGrid').length).toBe(categories.length)
		expect(wrapper).toMatchSnapshot()
	})
});

